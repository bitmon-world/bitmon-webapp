import React from "react";
import NavBarComponent from "../components/NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import GamesView from "../views/Games";
import HomeView from "../views/Home";
import BreedGameView from "../views/BreedGameView";
import CaptureGameView from "../views/CaptureGameView";
import FightGameView from "../views/FightGameView";

export default class MainLayout extends React.Component<any, any>{
    render() {
        return (
            <div>
                <NavBarComponent/>
                <Switch>
                    <Route path="/home" component={HomeView}/>
                    <Route path="/games" component={GamesView}/>
                    <Route path="/games/breed" component={BreedGameView}/>
                    <Route path="/games/capture" component={CaptureGameView}/>
                    <Route path="/games/fight" component={FightGameView}/>
                    <Redirect from="/" to="/home" />
                </Switch>
            </div>
        )
    }
}
