declare module "mongoose" {
  export class Schema<T = any> {
    constructor(definition?: any, options?: any);
    // Minimal static Types surface to support Schema.Types.ObjectId usage
    static Types: {
      ObjectId: any;
    };
  }

  export interface Model<T = any> {
    // minimal surface used in this package
  }

  export function model<T = any>(
    name: string,
    schema?: Schema<T>,
    collection?: string,
    options?: any
  ): Model<T>;
}



