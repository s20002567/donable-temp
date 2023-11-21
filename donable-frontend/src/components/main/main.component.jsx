import { Redirect, Route, Switch } from 'react-router-dom';
import AllCharities from '../charity/allCharities.component';
import DonatedCharities from '../charity/donatedCharities.component';
import SingleCharity from '../charity/singleCharity.component';
import UserProfile from '../userProfile/userProfile.component';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <AllCharities />
      </Route>
      <Route exact path='/my-charities'>
        <DonatedCharities />
      </Route>
      <Route path='/me'>
        <UserProfile />
      </Route>
      <Route path='/charity/:charity' component={SingleCharity} />
      <Redirect to='/' />
    </Switch>
  );
};

export default Main;
