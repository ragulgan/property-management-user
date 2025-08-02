/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { AsideMenuItemWithSub } from './AsideMenuItemWithSub';
import { AsideMenuItem } from './AsideMenuItem';

export function AsideMenuMain() {

  return (
    <>
      <AsideMenuItem
        to="/dashboard"
        title="Dashboard"
        fontIcon="bi-archive"
        icon="/media/avatars/asideMenu/dash001.svg"
        />
      <AsideMenuItemWithSub
        to='#'
        icon='/media/avatars/asideMenu/dash004.svg'
        title='Properties'
        fontIcon='bi-layers'
        >
            <AsideMenuItem
              to="/properties"
              title="My Property"
              fontIcon="bi-archive"
              icon="/media/icons/duotune/general/gen011.svg"
            />
            <AsideMenuItem
              to="/transaction"
              title="Transactions"
              fontIcon="bi-archive"
              icon="/media/icons/duotune/general/gen015.svg"
            />
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub
          to='#'
          icon='/media/avatars/asideMenu/dash005.svg'
          title='Leases'
          fontIcon='bi-layers'
        >
            <AsideMenuItem
              to="/leases"
              title="My Leases"
              fontIcon="bi-archive"
              icon="/media/icons/duotune/general/gen011.svg"
            />
            <AsideMenuItem
              to="/payments"
              title="Payments"
              fontIcon="bi-archive"
              icon="/media/icons/duotune/general/gen015.svg"
            />
        </AsideMenuItemWithSub>
        <AsideMenuItem
          to="/settings"
          title="Settings"
          fontIcon="bi-archive"
          icon="/media/avatars/asideMenu/dash006.svg"
        />
    </>
  );
}
