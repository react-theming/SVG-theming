import React from 'react';
import { storiesOf, action, addDecorator } from '@kadira/storybook';

import { muiTheme } from 'storybook-addon-material-ui';

import greyTheme from './greyTheme.json';

// PumpkinHead
import PumpkinHead from '../pumpkinHead.jsx';
import pumOrigTheme from '../themes/pumOrigTheme.json';
import pumFullTheme from '../themes/pumFullTheme.json';
import pumAltTheme from '../themes/pumAltTheme.json';

// Additional user themes
import halloweentheme from '../themes/halloweentheme.json';
import pumAlt2Theme from '../themes/pumAlt2Theme.json';
import IrishPumpkin from '../themes/IrishPumpkin.json';
import pumRick from '../themes/pumRick.json';
import pumFullThemeLee from '../themes/pumFullThemeLee.json';
import pumHead from '../themes/pumHead.json';
const userTemes = [pumOrigTheme, pumFullTheme, pumAltTheme, pumHead, pumAlt2Theme, IrishPumpkin, pumRick, pumFullThemeLee, halloweentheme];



/** note: decorators
 *  You can add decorator globally:
 *  addDecorator(muiTheme(greyTheme));
 *  You can pass a single object or an array of themes
 */

addDecorator(muiTheme([...userTemes,]));

storiesOf('Helloween', module)
    .addDecorator((story) => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '50%', maxWidth: 500, minWidth: 200 }}>
          {story()}
        </div>
      </div>
    ))
    .add('Pumpkin Head', () => (
      <PumpkinHead />
    ));

