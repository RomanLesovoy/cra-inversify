import {Container} from "inversify";
import * as services from "../services";

const container = new Container();
container.bind<services.IUserService>(services.UserService).to(services.UserService).inSingletonScope();
export {container}