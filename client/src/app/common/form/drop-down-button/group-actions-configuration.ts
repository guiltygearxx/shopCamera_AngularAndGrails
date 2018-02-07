import {ActionConfiguration} from "./action-configuration";

export class GroupActionsConfiguration {

  constructor(actionConfigs: ActionConfiguration[]) {

    this.actionConfigs = actionConfigs;
  }

  actionConfigs: ActionConfiguration[];
}
