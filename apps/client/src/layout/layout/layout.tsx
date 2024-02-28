import { PropsWithChildren } from 'react';
import './layout.module.scss';
import { FooterComponent } from '../footer/footer';
import { HeaderComponent } from '../header/header';

export const LayoutComponent = (props: PropsWithChildren) => {
  return (
    <div className="layout-container">
      <HeaderComponent></HeaderComponent>
      <main>{props.children}</main>
      <FooterComponent></FooterComponent>
    </div>
  );
};
