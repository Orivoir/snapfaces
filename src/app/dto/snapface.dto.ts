export default interface SnapfaceDTO {
  title: string;
  describe: string;
  imageUrl: string;
  countSnaps: number;

  /**
   * @var createAt - POSIX timestamp
   */
  createAt: number;

  tags: string[];

  comment?: string;
}