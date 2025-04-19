abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSapiens(): string;
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burstMode: boolean
  ) {
    super(cameraMode, filter);
  }

  getSapiens(): string {
    return "Hello, from sapiens !";
  }
}
