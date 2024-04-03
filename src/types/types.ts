export interface User {
  id: string;
  name: string;
  email: string;
  token: string;
}

export interface NavProps {
  containerStyles: string,
}

export interface InfoBoxProps {
  bgColor: string,
  title: string,
  count: number,
  icon: any
}