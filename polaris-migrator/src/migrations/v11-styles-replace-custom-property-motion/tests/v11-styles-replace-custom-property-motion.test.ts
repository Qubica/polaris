import {check} from '../../../utilities/testUtils';

const migration = 'v11-styles-replace-custom-property-motion';
const fixtures = ['v11-styles-replace-custom-property-motion'];

for (const fixture of fixtures) {
  check(__dirname, {
    fixture,
    migration,
    extension: 'scss',
  });
}
