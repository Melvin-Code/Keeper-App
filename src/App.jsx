import React, { Component } from 'react';
import Header from './Header'
import Notes from './Notes'
import Footer from './Footer';
import notes from './savedNotes'




class App extends Component {
 storegeNotes=()=>{
     let cardNotes = [...notes]
     return cardNotes.map((each)=>{
         return <Notes key={each.key} {...each}/>
     })
 }
  render() {
    return (
      <div className="App">
      <Header />
     {this.storegeNotes()}
      <Footer />
    
      </div>
    );
  }
}

export default App;
