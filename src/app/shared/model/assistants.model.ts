export class Assistants {
  constructor(public results:Assistant[]) {
  }
}

export class Assistant {
  constructor(public name:Name,
              public location:Location,
              public description:string,
              public picture:ProfilePicture,
              public gender:string) {

  }
}

export class Name {
  constructor(public first:string,
              public last:string) {
  }
}

export class Location {
  constructor(public city:string) {
  }
}

export class ProfilePicture {
  constructor(public large:string) {
  }
}
