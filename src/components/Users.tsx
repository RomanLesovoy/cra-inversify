import * as React from "react";
import {resolve} from "inversify-react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {IUserService, UserService, userSubjects} from "../services";

export class Users extends React.Component<any, { users: Array<any> }> {
  @resolve(UserService) private readonly userService: IUserService | any;

  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      users: this.userService.subjects.users,
    }
  }

  componentDidMount() {
    this.userService.subscribeSubject(userSubjects.users, (users: Array<any>) => this.setState({ users }));
  }

  render() {
    return (
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        { this.state.users.map((user: { name: string, image: string }) => (
          <Card key={user.name} style={{margin: '10px auto', width: '200px'}}>
            <CardActionArea>
              <CardContent>
                <Avatar src={`/images/${user.image}`} alt="" />
                <Typography gutterBottom variant="h5" component="h2">
                  { user.name }
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={() => this.userService.updateUsers([
                ...this.state.users.filter((_user) => _user !== user)
              ])}>
                Remove
              </Button>
            </CardActions>
          </Card>
        )) }
      </div>
    )
  }
}
