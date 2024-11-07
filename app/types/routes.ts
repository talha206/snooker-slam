export interface IRoute {
  component: React.FC
  title: string
  icon?: string
  sharedElements?: any
  name?: string
}

export type IRoutes = IRoute[]

export type RootStackParamList = {
  [key: string]: any
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}
