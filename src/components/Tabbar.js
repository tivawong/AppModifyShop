/**
 * Footer Component
 */

import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback } from "react-native";


class Tabbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: "#B91E45",
      contact: "#B91E45",
    };
  }
  componentDidMount() {
    if (this.props.col == "Home") {
      this.home1();
      this.fonthome();
    }
    if (this.props.col == "Contact") {
      this.contact1();
      this.fontcontact();
    }
  }
  
  home1() {
    this.setState({ home1: "#FFFFFF" });
    this.setState({ contact1: "#65082F" });
  }
  contact1(){
    this.setState({ home1: "#65082F" });
    this.setState({ contact1: "#FFFFFF" });
  }
  fonthome(){
    this.setState({ fonthome: "#E30025" });
    this.setState({ fontcontact : "#FFFFFF" });
  }
  fontcontact() {
    this.setState({ fonthome: "#FFFFFF" });
    this.setState({ fontcontact: "#E30025" });
  }
  

  render() {
    return (
      <View style={{flex: 1,flexDirection: "row",backgroundColor: this.state.home }}>
        <TouchableOpacity  
          activeOpacity={0.5}
          onPress={() => {
            
            this.props.navigation.navigate("Home");
          }}
          style={{ flex: 1, backgroundColor: this.state.home1 }}
        >
          <View style={{ flex: 1, alignItems: "center", marginTop: "4%" }}>
            <Image
              style={{ width: 25, height: 25 }} 
              source={require("../images/homecars.png")}
              resizeMode="contain"
            />
            <Text style={{ color: this.state.fonthome, fontSize: 15, fontWeight: "bold",fontFamily:'CSChatThai'}}>
              Home
            </Text>
          </View>
        </TouchableOpacity>
{/* 1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111 */}
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            this.props.navigation.navigate("Contact");
          }}
          style={{ flex: 1, backgroundColor: this.state.contact1 }}
        >
          <View style={{ flex: 1, alignItems: "center", marginTop: "4%"}}>
            <Image
              style={{ width: 25, height: 25 }}
              source={require("../images/contact.png")}
              resizeMode="contain"
            />
            <Text style={{ color: this.state.fontcontact, fontSize: 15, fontWeight: "bold",fontFamily:'CSChatThai'}}>
              Contact
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Tabbar;
