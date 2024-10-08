import React, { Component } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn,MDBInput,MDBModalBody,MDBModalHeader,MDBModalFooter,MDBIcon,MDBBadge, MDBModal, } from "mdbreact";
import "./App.css";
import Event from "./components/Event";

class App extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      events: [
        {
          id: 1,
          time: "10:00", 
          title: "Breakfast with Simon",
          location: "Lounge caffe",
          description: "Discuss Q3 targets"
        },
        {
          id: 2,
          time: "10:30", 
          title: "Daily Standup Meeting (recuring)",
          location: "Warsaw Spire Office",
        },
        {
          id: 3,
          time: "11:00", 
          title: "Call with HRs"
        },
        {
          id: 4,
          time: "11:00",
          title: "Lunch with Timothy",
          location: "Canteen",
          description: "Project evaluation",
        }
      ]
    }
  
  }
  handleInputChange = inputName => value => {
    const nextValue = value;
    this.setState({
      [inputName]: nextValue
    })
    console.log(this.state);
    
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    })
  };

  handleDelete = eventId => {
    const events = this.state.events.filter( e => e.id !== eventId);
    this.setState({events})

  }

  addEvent = () => {
    let newArray = [...this.state.events]
    newArray.push({
      id: newArray.length ? newArray[newArray.length -1].id + 1 : 1,
      time: this.state.time,
      title: this.state.title,
      location: this.state.location,
      description: this.state.description,
      value : this.var > 5 ? "It's grater then 5" : "It's lower then 5"
    })
    this.setState({
      events: newArray
    })
    this.setState({
      time: "",
      title: "",
      location: "",
      description: "",
    })
  }

  render() {
    return (
      <React.Fragment>
        <MDBContainer>
          <MDBRow>
              <MDBCol md='9' >
                <h2 className="text-uppercase my-3">Today:</h2>
                <div id="schedule-items">
                {this.state.events.map( x => (
                  <Event 
                  key={x.id}
                  id={x.id}
                  time= {x.time} 
                  title= {x.title}
                  location= {x.location}
                  description= {x.description}
                  onDelete= {this.handleDelete}
                  />
                ) )}
                </div>
                <h1 className="my-3">
                  <MDBRow className="mb-4">
                    <MDBCol xs="3" md="6" className="mx-auto text-center">
                      <button className="btn btn-info rounded" onClick={this.toggleModal}>Add Event</button>
                    </MDBCol>
                  </MDBRow>
                </h1>
              </MDBCol>
              <MDBCol md='3' >
                <h3 className="text-uppercase my-3">Schedule</h3>
                <h6 className="my-3">
                  It's going to be busy that today. You have {" "}
                  <b>{this.state.events.length} events</b> today.
                </h6>
                <h1 className="my-3">
                  <MDBRow>
                    <MDBCol xs="3" className="text-center">
                      <MDBIcon icon="sun" fixed/>
                    </MDBCol>
                    <MDBCol xs="9">
                      Sunny
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol xs="3" className="text-center">
                     <MDBIcon icon="thermometer-three-quarters" fixed/>
                    </MDBCol>
                    <MDBCol xs="9">
                      23°
                    </MDBCol>
                  </MDBRow>
                </h1>
                <p>
                  Don't forget your sunglasses. Today will be dry and sunny,
                  becoming warm in the  afternoon with temperatures of between
                  20 and 25 degrees.
                </p>
              </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBModal isOpen={this.state.modal} toggle={this.toggleModal}>
                <MDBModalHeader
                  className="text-center"
                  titleClass="w-100 font-weight-bold"
                  toggle={this.toggleModal}
                >
                  Add new event
                </MDBModalHeader>
                <MDBModalBody>
                  <form className="mx-3 grey-text">
                    <MDBInput 
                      name = 'time'
                      label ="Time"
                      icon="clock"
                      hint="12:00"
                      group
                      type="text"
                      getValue={this.handleInputChange("time")}
                    />
                     <MDBInput 
                      name = 'title'
                      label ="Title"
                      icon="edit"
                      hint="Briefing"
                      group
                      type="text"
                      getValue={this.handleInputChange("title")}
                    />
                     <MDBInput 
                      name = 'location'
                      label ="Location (optional)"
                      icon="map"
                      group
                      type="text"
                      getValue={this.handleInputChange("location")}
                    />
                     <MDBInput 
                      name = 'description'
                      label ="Description(optional)"
                      icon="sticky-note"
                      group
                      type="text"
                      getValue={this.handleInputChange("description")}
                    />
                    <button
                      type="button"
                      className="btn btn-info rounded"
                      onClick={() => {
                        this.toggleModal()
                        this.addEvent()
                      }}
                    >
                      Add Event
                    </button>

                  </form>
                </MDBModalBody>
                <MDBModalFooter className="justify-content-center"></MDBModalFooter>
        </MDBModal>
      </React.Fragment>
    )
  }
  myLoopFunction(){
    const myArray = this.state.events.map( x => (
      <Event 
       title= {x.time}
       time = {x.title}
      />
    ));
    console.log(myArray);
    return myArray
    
  }
}

export default App;
