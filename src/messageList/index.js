import React, { Component, Fragment } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Divider from '@material-ui/core/Divider'
import './index.scss'

const CLASS = 'messageList'

class messageList extends Component {
  getDate (time) {
    const date = new Date(time)
    const mm = ('0' + date.getMinutes()).substr(-2)
    const hh = ('0' + date.getHours()).substr(-2)
    const ss = ('0' + date.getSeconds()).substr(-2)
    return hh + ':' + mm + ':' + ss
  }
  render () {
    const { messages } = this.props
    return (
      <div className={CLASS}>
        <List>
          {
            messages.map(message => (
              <Fragment key={message.time}>
                <ListItem>
                  <Avatar>
                    <AccountCircle />
                  </Avatar>
                  <ListItemText>
                    <div className={`${CLASS}-header`}>
                      <span className={`${CLASS}-user`}>{message.user || 'User'}</span>
                      <span className={`${CLASS}-date`}>{this.getDate(message.time)}</span>
                    </div>
                    <span className={`${CLASS}-message`}>{message.text}</span>
                  </ListItemText>
                </ListItem>
                <li>
                  <Divider inset />
                </li>
              </Fragment>
            ))
          }
        </List>
      </div>
    )
  }
}

export default messageList
