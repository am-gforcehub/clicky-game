import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import friends from "./friends.json";

// function shuffleFriends(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

class App extends Component {
  state = {
    friends,
    score: 0,
    topScore: 0
  };
  gameOver = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score }, function() {
        console.log(this.state.topScore);
      });
    }
    this.state.friends.forEach(FriendCard => {
      FriendCard.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  };
  clickCount = id => {
    this.state.friends.find((o, i) => {
      if (o.id === id) {
        if (friends[i].count === 0) {
          friends[i].count = friends[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function() {
            console.log(this.state.score);
          });
          this.state.friends.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  };

  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score} topScore={this.state.topScore}>
          <header>Pets Clicky Game</header>

          <p>
            How to Play
            <br />
            Click on the pets below but try not to click the same pet twice!
          </p>

          <Title>
            <a href="/">CLICK TO RESET GAME</a>
          </Title>
        </Navbar>

        {this.state.friends.map(friend => (
          <FriendCard
            clickCount={this.clickCount}
            id={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
