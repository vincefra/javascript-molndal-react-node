import { TestComponent } from './components/testcomponent/TestComponent'
import { Routing } from './routes/Routing'
import { NavigationBar } from './components/navigationbar/NavigationBar'
import './utils/global/Global.css'
import { UserProvider } from './utils/global/provider/UserProvider'
import { ApiProvider } from './utils/global/provider/ApiProvider'

function App() {
  return (
    <ApiProvider>
      <UserProvider>
        <Routing>
          <NavigationBar />
        </Routing>
      </UserProvider>
    </ApiProvider>
  );
}

export default App;
