import { CanDeactivateFn } from '@angular/router';

export const restrictGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return false;
};
