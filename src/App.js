import React, { useState } from 'react';
// import { MongoClient } from 'mongodb';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Data extends React.Component {

  constructor(props) {
    super(props)

    this.onChangeItemIndex = this.onChangeItemIndex.bind(this);
    this.onChangeTasteType = this.onChangeTasteType.bind(this);
    this.onChangeAmountType = this.onChangeAmountType.bind(this);
    this.onChangePrepareType = this.onChangePrepareType.bind(this);
    this.onChangeServingType = this.onChangeServingType.bind(this);
    this.onChangeStoreType = this.onChangeStoreType.bind(this);
    this.onChangeOrderType = this.onChangeOrderType.bind(this);
    this.onChangeIngredientType = this.onChangeIngredientType.bind(this);
    this.onChangeInformation = this.onChangeInformation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      selectedIndex: '0',
      taste: '',
amount: '',
prepare: '',
serving: '',
store: '',
order: '',
ingredient: '',
information: '',
    }
  }

  onChangeItemIndex(e) {
    this.setState({ selectedIndex: e.target.value })
  }

  onChangeTasteType(e) {
    this.setState({ taste: e.target.value })
  }

  onChangeAmountType(e) {
    this.setState({ amount: e.target.value })
  }

  onChangePrepareType(e) {
    this.setState({ prepare: e.target.value })
  }

  onChangeServingType(e) {
    this.setState({ serving: e.target.value })
  }

  onChangeStoreType(e) {
    this.setState({ store: e.target.value })
  }

  onChangeOrderType(e) {
    this.setState({ order: e.target.value })
  }

  onChangeIngredientType(e) {
    this.setState({ ingredient: e.target.value })
  }

  onChangeInformation(e) {
    this.setState({ information: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const Store = {
      selectedIndex: this.state.selectedIndex,
      taste: this.state.taste,
      amount: this.state.amount,
      prepare: this.state.prepare,
      serving: this.state.serving,
      store: this.state.store,
      order: this.state.order,
      ingredient: this.state.ingredient,
      information: this.state.information,
    };
    const post = [];
    post('http://localhost:12345', Store)
    this.setState({ selectedIndex: '0', taste: '', amount: '', prepare: '', serving: '', store: '', order: '', ingredient: '', information: '' })
  }
}

const uri = "mongodb://hostname1:27017,hostname2:27017,hostname3:27017/?replicaSet=asd"


function App() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
const asd = [];
  return (
    <div className="App">
      <header className="App-header">
       <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="Item 1"
        />
        <Carousel.Caption>
          <h3> Item 1 </h3>
          <p> Description </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="Item 2 "
        />

        <Carousel.Caption>
          <h3> Item 2 </h3>
          <p> Description </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="Item 3"
        />

        <Carousel.Caption>
          <h3> Item 3 </h3>
          <p> Description </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Carousel interval={null} controls={false} indicators={false} prevIcon={asd} nextIcon={asd} slide={false} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src=""
          alt="Item 1"
        />
         Taste:
    <Form.Select aria-label="Default select example">    
  <option> </option>
  <option value="1">Straight</option>
  <option value="2">Spicy</option>
  <option value="3">Request</option>
  </Form.Select>
       
        Amount:
        <Form.Select aria-label="Default select example">
  <option> </option>
  <option value="1">Addition</option>
  <option value="2">Recipe</option>
  <option value="3">Reduction</option>
  </Form.Select>
          Prepare:
          <Form.Select aria-label="Default select example">
  <option> </option>
  <option value="1">Fry</option>
  <option value="2">Steam</option>
  <option value="3">Bake</option>
  </Form.Select>      
        Serving:
        <Form.Select aria-label="Default select example">
  <option> </option>
  <option value="1">Tray</option>
  <option value="2">Banquet</option>
  <option value="3">Dinner</option>
</Form.Select>
       
          Store:
          <Form.Select aria-label="Default select example">
  <option> </option>
  <option value="1">Wrap</option>
  <option value="2">Standart</option>
  <option value="3">Bag</option>
</Form.Select>
             
Order:
<Form.Select aria-label="Default select example">
  <option> </option>
  <option value="1">Counter</option>
  <option value="2">Service</option>
  <option value="3">Vendor</option>
</Form.Select>
Ingredient: 
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first"> Stock </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second"> Increase </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third"> Option </Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <Form.Select aria-label="Default select example">
  <option> </option>
  <option value="1">Brisket</option>
  <option value="2">Banana</option>
  <option value="3">Pepper</option>
</Form.Select>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
        <Form.Select aria-label="Default select example">
  <option> </option>
  <option value="1">Sauce</option>
  <option value="2">Carrot</option>
  <option value="3">Rosemary</option>
</Form.Select>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
<form>
  <label>
  Information:
    <input type="text" style={{ height: 123 }} name="Information" />
  </label>
  <input type="submit" value="Submit" />
</form>

      <Carousel.Caption>
          <h3>Item: 1</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="Item 2"
        />
                  Taste:
        <Form.Select aria-label="Default select example">
  <option> </option>
  <option value="1">Straight</option>
  <option value="2">Spicy</option>
  <option value="3">Request</option>
  </Form.Select>         
        Amount:
        <Form.Select aria-label="Default select example">
  <option> </option>
  <option value="1">Addition</option>
  <option value="2">Recipe</option>
  <option value="3">Reduction</option>
  </Form.Select>
          Prepare:
          <Form.Select aria-label="Default select example">
  <option> </option>
  <option value="1">Fry</option>
  <option value="2">Steam</option>
  <option value="3">Bake</option>
  </Form.Select>      
        Serving:
        <Form.Select aria-label="Default select example">
  <option> </option>
  <option value="1">Tray</option>
  <option value="2">Banquet</option>
  <option value="3">Dinner</option>
</Form.Select>
       
          Store:
          <Form.Select aria-label="Default select example">
  <option> </option>
  <option value="1">Wrap</option>
  <option value="2">Standart</option>
  <option value="3">Bag</option>
</Form.Select>
             
Order:
<Form.Select aria-label="Default select example">
  <option> </option>
  <option value="1">Counter</option>
  <option value="2">Service</option>
  <option value="3">Vendor</option>
</Form.Select>
Ingredient: 
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first"> Stock </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second"> Increase </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third"> Option </Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <Form.Select aria-label="Default select example">
  <option> </option>
  <option value="1">Roast</option>
  <option value="2">Cabbage</option>
  <option value="3">Pepper</option>
</Form.Select>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
        <Form.Select aria-label="Default select example">
  <option></option>
  <option value="1">Potato</option>
  <option value="2">Onion</option>
  <option value="3">Mint</option>
</Form.Select>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>

<form>
  <label>
  Information:
    <input type="text" style={{ height: 123 }} name="Information" />
  </label>
  <input type="submit" value="Submit" />
</form>

        <Carousel.Caption>
          <h3>Item: 2</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="Item 3"
        />
  Taste:
        <Form.Select aria-label="Default select example">
  <option> </option>
  <option value="1">Straight</option>
  <option value="2">Spicy</option>
  <option value="3">Request</option>
  </Form.Select>         
          Amount:
        <Form.Select aria-label="Default select example">
  <option> </option>
  <option value="1">Addition</option>
  <option value="2">Recipe</option>
  <option value="3">Reduction</option>
  </Form.Select>
          Prepare:
          <Form.Select aria-label="Default select example">
  <option> </option>
  <option value="1">Fry</option>
  <option value="2">Steam</option>
  <option value="3">Bake</option>
  </Form.Select>      
         Serving:
        <Form.Select aria-label="Default select example">
  <option> </option>
  <option value="1">Tray</option>
  <option value="2">Banquet</option>
  <option value="3">Dinner</option>
</Form.Select>
       
         Store:
          <Form.Select aria-label="Default select example">
  <option> </option>
  <option value="1">Wrap</option>
  <option value="2">Standart</option>
  <option value="3">Bag</option>
</Form.Select>
             
         Order:
<Form.Select aria-label="Default select example">
  <option> </option>
  <option value="1">Counter</option>
  <option value="2">Service</option>
  <option value="3">Vendor</option>
</Form.Select>
         Ingredient: 
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first"> Stock </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second"> Increase </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third"> Option </Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <Form.Select aria-label="Default select example">
  <option> </option>
  <option value="1">Ham</option>
  <option value="2">Orange</option>
  <option value="3">Pepper</option>
</Form.Select>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
        <Form.Select aria-label="Default select example">
  <option> </option>
  <option value="1">Steak</option>
  <option value="2">Pear</option>
  <option value="3">Oregano</option>
</Form.Select>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>

<form>
  <label>
  Information:
    <input type="text" style={{ height: 123 }} name="Information" />
  </label>
  <input type="submit" value="Submit" />
</form>


        <Carousel.Caption>
          <h3>Item: 3</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </header>
    </div>
  );
}

export default App;