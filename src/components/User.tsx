import * as React from "react";
import {resolve} from "inversify-react";
import {Typography} from '@material-ui/core';
import {IUserService, UserService, userSubjects} from "../services";

export class User extends React.Component<any, { user: any }> {
  @resolve(UserService) private readonly userService: IUserService | any;

  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      user: this.userService.subjects.user,
    }
  }

  componentDidMount() {
    this.userService.subscribeSubject(userSubjects.user, (user: any) => this.setState({ user }));
  }

  render() {
    return (
      <Typography variant="h2">Hello { this.state.user.name }</Typography>
    )
  }
}
