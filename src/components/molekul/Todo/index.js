import axios from "axios";
import React from "react";

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
    };
    this.getTodos = this.getTodos.bind(this);
  }

  componentDidMount() {
    this.getTodos();
  }

  async getTodos() {
    let data = await axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=20")
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
    this.setState({ todos: data.data });
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h3>Pakai komponen Didmount</h3>
        <hr />
        {todos &&
          todos.map((todo) => {
            return (
              <table>
                <tr>
                  <td>{todo.id}</td>
                  <td>
                    <p key={todo.id}>{todo.title}</p>
                  </td>
                </tr>
              </table>
            );
          })}
      </div>
    );
  }
}

export default Todos;
