import React, { Component } from 'react';
import { Row, Col, Collapsible, CollapsibleItem, Icon, Preloader } from 'react-materialize';
import { searchTypes, keywordSearchResultsInitial, passageSearchResultsInitial } from '../helpers/constants';
import { getPassageResults, getKeywordResults } from '../utils/searchUtil';
import { toast } from 'react-toastify';
import { Fade } from 'react-reveal';
import getLocationQuery from '../utils/getLocationQuery';
import Title from '../common/Title';
import Search from '../common/Search';
import Copyright from '../common/Copyright';
import KeywordResult from '../common/KeywordResult';

class DesktopView extends Component {
  state = {
    isPassageExpanded: true,
    isKeywordExpanded: false,
    isLoading: false,
    isInitialState: true,
    keywordSearchResults: keywordSearchResultsInitial,
    passageSearchResults: passageSearchResultsInitial,
  }

  componentDidMount(){
    const { location } = this.props;
    const data = getLocationQuery(location);
    
    if (data) {
      this.onSearch(data.query, data.type);
    }
  }

  onSearch = async (text, type) => {
    const { history } = this.props;
    const cleanedValue = text.trim().replace(/ /g, '+');

    this.setState({
      isLoading: true,
      isInitialState: false,
    });

    try {
      if (type === searchTypes.keyword) {
        const data = await getKeywordResults(cleanedValue);
        await this.setState({
          keywordSearchResults: data,
          passageSearchResults: passageSearchResultsInitial,
        });
      } else {
        const data = await getPassageResults(cleanedValue);
        await this.setState({
          passageSearchResults: data,
          keywordSearchResults: keywordSearchResultsInitial,
        });
      }
    } catch(error) {
      console.error("ERROR: ", error);
      toast.error("Search failed. Please simplify your search and try again.");
    }

    history.push(`/bibleApp/${type}?q=${cleanedValue}`);

    this.setState({isLoading: false});
  }

  getPrevChapter = () => {
    const { passageSearchResults } = this.state;
    const prevChapArr = passageSearchResults.passage_meta[0].prev_chapter;

    return prevChapArr.join('-');
  }

  getNextChapter = () => {
    const { passageSearchResults } = this.state;
    const nextChapArr = passageSearchResults.passage_meta[0].next_chapter;

    return nextChapArr.join('-');
  }


  render() {
    const { 
      isPassageExpanded, 
      isKeywordExpanded, 
      isLoading,
      passageSearchResults,
      keywordSearchResults,
      isInitialState,
    } = this.state;

    const prevChapRef = this.getPrevChapter();
    const nextChapRef = this.getNextChapter();

    return (
      <div className="desktop-container">
        <Row className="row-wrapper">
          <Col xl={3} m={4} className="col-wrapper search-col">
            <Fade left>
              <Title />
              <Collapsible>
                <CollapsibleItem 
                  header="Passages" 
                  expanded={true} 
                  node="div"
                  onClick={() => this.setState({ 
                    isKeywordExpanded: false,
                    isPassageExpanded: !isPassageExpanded,
                  })}
                  icon={isPassageExpanded ? <Icon>keyboard_arrow_down</Icon> : <Icon>keyboard_arrow_right</Icon>}
                >
                  <Search viewMode='desktop-view' type={searchTypes.passages} onSearch={this.onSearch}/>
                </CollapsibleItem>
                <CollapsibleItem 
                  header="Keyword" 
                  node="div"
                  onClick={() => this.setState({ 
                    isKeywordExpanded: !isKeywordExpanded,
                    isPassageExpanded: false,
                  })}
                  icon={isKeywordExpanded ? <Icon>keyboard_arrow_down</Icon> : <Icon>keyboard_arrow_right</Icon>}
                >
                  <Search viewMode='desktop-view' type={searchTypes.keyword} onSearch={this.onSearch}/>
                </CollapsibleItem>
              </Collapsible>
              </Fade>
          </Col>
          <Col xl={9} m={8} className="col-wrapper display-col">
            { isLoading && !isInitialState &&
              <Preloader className="loading-spinner" />
            }

            { isInitialState && !isLoading &&
              <Fade top duration={2000}>
                <div className="pre-search-msg">
                  <p>Welcome to the Bible App. Search passages, verses, and keywords in the ESV Bible.</p>
                  <Icon>search</Icon>
                </div>
              </Fade>
            }

            { !isInitialState && 
              !isLoading && 
              passageSearchResults !== passageSearchResultsInitial &&
              passageSearchResults.passages &&
              passageSearchResults.passages.length > 0 &&

              <Row>
                <Col s={1}>
                  <div 
                    className="chapter-nav nav-left"
                    role="button"
                    tabIndex={0}
                    onClick={() => this.onSearch(prevChapRef, searchTypes.passages)}
                    onKeyPress={() => this.onSearch(prevChapRef, searchTypes.passages)}
                    title="Previous Chapter"
                  >
                    <Icon>chevron_left</Icon>
                  </div>
                </Col>
                <Col s={10}>
                  <div className="passage-text">{passageSearchResults.passages}</div>
                </Col>
                <Col s={1}>
                  <div 
                    className="chapter-nav nav-right"
                    role="button"
                    tabIndex={0}
                    onClick={() => this.onSearch(nextChapRef, searchTypes.passages)}
                    onKeyPress={() => this.onSearch(nextChapRef, searchTypes.passages)}
                    title="Next Chapter"
                  >
                    <Icon>chevron_right</Icon>
                  </div>
                </Col>

                <Col s={12}>
                  <Copyright />
                </Col>
              </Row>
            }

            { !isInitialState && 
              !isLoading && 
              keywordSearchResults !== keywordSearchResultsInitial &&
              keywordSearchResults.results &&
              keywordSearchResults.results.length > 0 &&

               <Row>
                 <Col s={12}>
                    {keywordSearchResults.results.map(result => (
                      <KeywordResult key={`key-${result.reference}`} search={this.onSearch} {...result} />
                    ))}
                 </Col>

                 <Col s={12}>
                   <Copyright />
                 </Col>
               </Row>
            }
          </Col>
        </Row>
      </div>
    );
  }
}

export default DesktopView;