import { MobileDashboard } from './components/dashboard/MobileDashboard'
import { MainTabProvider } from './navigation/MainTabProvider'
import { NavigationProvider } from './navigation/NavigationProvider'
import { ThemeProvider } from './theme/ThemeProvider'

function App() {
  return (
    <ThemeProvider>
      <MainTabProvider>
        <NavigationProvider>
          <MobileDashboard />
        </NavigationProvider>
      </MainTabProvider>
    </ThemeProvider>
  )
}

export default App
