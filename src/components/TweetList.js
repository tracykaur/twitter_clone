import React, { Component } from 'react';
import { Box, Container, Media, Image, Content, Level, Icon } from 'reactbulma';
class TweetList extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Box>
            <Media>
              <Media.Left>
                <Image
                  is="64x64"
                  src="http://bulma.io/images/placeholders/128x128.png"
                  alt="Image"
                />
              </Media.Left>
              <Media.Content>
                <Content>
                  <p>
                    <strong>John Smith</strong> <small>@johnsmith</small>{' '}
                    <small>31m</small>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean efficitur sit amet massa fringilla egestas. Nullam
                    condimentum luctus turpis.
                  </p>
                </Content>
                <Level mobile>
                  <Level.Left>
                    <Level.Item>
                      <Icon small>
                        <i className="fa fa-reply" />
                      </Icon>
                    </Level.Item>
                    <Level.Item>
                      <Icon small>
                        <i className="fa fa-retweet" />
                      </Icon>
                    </Level.Item>
                    <Level.Item>
                      <Icon small>
                        <i className="fa fa-heart" />
                      </Icon>
                    </Level.Item>
                  </Level.Left>
                </Level>
              </Media.Content>
            </Media>
          </Box>
        </Container>
      </div>
    );
  }
}
export default TweetList;
