import { ModuleFederationConfig } from '@nx/module-federation';

const DASHBOARD_URL = process.env['DASHBOARD_REMOTE_URL'] ?? '/dashboard';
const SETTINGS_URL = process.env['SETTINGS_REMOTE_URL'] ?? '/settings';

const config: ModuleFederationConfig = {
  name: 'shell',
  /**
   * To use a remote that does not exist in your current Nx Workspace
   * You can use the tuple-syntax to define your remote
   *
   * remotes: [['my-external-remote', 'https://nx-angular-remote.netlify.app']]
   *
   * You _may_ need to add a `remotes.d.ts` file to your `src/` folder declaring the external remote for tsc, with the
   * following content:
   *
   * declare module 'my-external-remote';
   *
   */
  remotes: [
    ['dashboard', DASHBOARD_URL],
    ['settings', SETTINGS_URL]
  ],
  shared: (libraryName, sharedConfig) => {
    // Force the auth service to be a singleton across all federated modules
    if (libraryName === '@pomodoro-plus/shared-auth') {
      return {
        ...sharedConfig,
        singleton: true,
        strictVersion: true,
        eager: false,
      };
    }
    return sharedConfig;
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
