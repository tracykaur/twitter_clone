import React, { Component } from 'react';
import { Container, Control, Input, File, Field, Button } from 'reactbulma';

class NewTweet extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Field hasAddons>
            <Control>
              <Input placeholder="Text input" />
            </Control>
            <Control>
              <Button info>Submit</Button>
            </Control>
          </Field>
        </Container>
      </div>
    );
  }
}

export default NewTweet;
