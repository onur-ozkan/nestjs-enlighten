import * as env from 'dotenv';
env.config();

export class EnvironmentService {
  private envList: object = process.env;

  // Returns inversed object to show custom definitions at top of the object properties.
  public getEnvironmentList() {
    const inversedObject = {};
    const keys = [];

    for (const key in this.envList) {
        keys.push(key);
    }

    for (let i = keys.length - 1; i >= 0; i--) {
      const value = this.envList[keys[i]];
      inversedObject[keys[i]]= value;
    }

    return inversedObject;
  }
}
