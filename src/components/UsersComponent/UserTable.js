import React, { Component } from 'react'

class UserTable extends Component {
  render() {
    const {users} = this.props;

    return (
      <table className="table table-bordered table-hover" width="100%">
        <thead>
          <tr>
            {
              users.length > 0 && Object.keys(users[0]).map((item, i) => {
                return <td key={i}>{item}</td>
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            users.length > 0 && users.map((row, i) => {
              return (
                <tr key={i}>
                  {
                    Object.keys(row).map((column, i) => {
                      return (
                        <td key={i}>{row[column]}</td>
                      )
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
    );
  }
}

export default UserTable;