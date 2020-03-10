import Team from "../team";
import Character from "../character";

const char1 = new Character("Willy", "Magician");
const char2 = new Character("Billy", "Daemon");
const char3 = new Character("Dilly", "Swordsman");

describe("team", () => {
  it("add one character to party", () => {
    const expected = new Set([char1]);

    const team = new Team();
    team.add(char1);
    expect(team.members).toEqual(expected);
  });

  it("error", () => {
    const result = () => {
      const team = new Team();
      team.add(char1);
      team.add(char1);
    };

    expect(result).toThrow(new Error("character is added to the party"));
  });

  it("add all characters to party", () => {
    const expected = new Set([char1, char2, char3]);

    const team = new Team();
    team.addAll(char1, char2, char3);
    expect(team.members).toEqual(expected);
  });

  it("add all characters to party only once", () => {
    const team = new Team();

    team.add(char2);
    team.addAll(char1, char2, char3);
    expect(team.members.size).toBe(3);
  });

  it("", () => {
    const expected = [...(new Set([char1, char2, char3]))];

    const team = new Team();
    team.addAll(char1, char2, char3);
    const result = team.toArray();

    expect(result).toEqual(expected);
  });
});