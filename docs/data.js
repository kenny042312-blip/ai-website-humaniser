export const films = [
  {
    id: 'city', title: 'The City at 2:17', displayTitle: 'THE CITY AT 2:17', director: 'Mira Sen', year: 2026, minutes: 104,
    country: 'Japan / United Kingdom', language: 'Japanese & English', subtitles: 'English subtitles', format: '35mm', category: 'NIGHT WANDERERS', image: 'city.png',
    alt: 'A lone traveller in an orange coat waits on a wet train platform at night.',
    teaser: 'Two strangers. One missed train. A city that isn’t quite ready to sleep.',
    synopsis: 'When a delayed connection strands a translator at the edge of the city, she shares an aimless night with a baker on his way to work. They trade unfinished stories in all-night cafés, empty shopping arcades and a train station that seems to have stopped keeping time.',
    note: 'For anyone who has ever missed a train and secretly been a little relieved. Stay with the quiet moments: a borrowed umbrella, a vending-machine dinner, the long pause before someone finally says what they mean.',
    content: 'Mild language. Brief discussion of grief.',
    shows: [
      {id: 'city-fri', day: '6', dayName: 'Friday', dateLabel: 'FRI 06 NOV', time: '20:30'},
      {id: 'city-sat', day: '7', dayName: 'Saturday', dateLabel: 'SAT 07 NOV', time: '19:30'}
    ]
  },
  {
    id: 'tune', title: 'A Little Out of Tune', displayTitle: 'A LITTLE OUT OF TUNE', director: 'Luca Bell', year: 2026, minutes: 88,
    country: 'United Kingdom', language: 'English', subtitles: 'English dialogue', format: 'DCP', category: 'HAPPY ACCIDENTS', image: 'tune.png',
    alt: 'A small band rehearses in a community hall, photographed in black and white.',
    teaser: 'The band is falling apart. The music is finally getting interesting.',
    synopsis: 'A pianist, a trumpet player and a drummer borrow the same community hall every Thursday. After their only paying gig falls through, they decide to play one last concert for the people who have been listening through the walls all along.',
    note: 'A film about listening badly, then learning to listen properly. Its best jokes arrive half a beat late; its best song starts in the middle of an argument. A good one to bring a friend to.',
    content: 'Occasional strong language. Alcohol references.',
    shows: [
      {id: 'tune-fri', day: '6', dayName: 'Friday', dateLabel: 'FRI 06 NOV', time: '18:15'},
      {id: 'tune-sat', day: '7', dayName: 'Saturday', dateLabel: 'SAT 07 NOV', time: '21:45'}
    ]
  },
  {
    id: 'blue', title: 'Blue Hour, Nowhere', displayTitle: 'BLUE HOUR, NOWHERE', director: 'Inès Duarte', year: 2026, minutes: 96,
    country: 'Portugal / Spain', language: 'Portuguese & Spanish', subtitles: 'English subtitles', format: 'DCP', category: 'THE LONG WAY HOME', image: 'blue.png',
    alt: 'An almost empty turquoise swimming pool beside a faded motel in warm evening light.',
    teaser: 'An empty swimming pool. A very long summer. A reason to stay.',
    synopsis: 'Returning to help close her aunt’s roadside motel, a swimming teacher finds a drained pool, three guests who refuse to check out, and a pile of postcards that were never sent. The plan is to leave on Monday. Nobody says which Monday.',
    note: 'Sun-warmed, slightly off-centre and in no particular hurry. Watch the edges of the frame. This is a film that gives an empty plastic chair almost as much to do as its cast.',
    content: 'Brief smoking scenes. Themes of family separation.',
    shows: [
      {id: 'blue-sat', day: '7', dayName: 'Saturday', dateLabel: 'SAT 07 NOV', time: '16:00'},
      {id: 'blue-sun', day: '8', dayName: 'Sunday', dateLabel: 'SUN 08 NOV', time: '17:00'}
    ]
  }
];

export const showIndex = new Map(films.flatMap(film => film.shows.map(show => [show.id, {film, show}])));
export function matchingFilms(day, format) {
  return films.filter(film => format === 'all' || film.format === format).map(film => ({...film, shows: film.shows.filter(show => day === 'all' || show.day === day)})).filter(film => film.shows.length);
}
export function normaliseSaved(value) {
  return Array.isArray(value) ? [...new Set(value.filter(id => typeof id === 'string' && showIndex.has(id)))] : [];
}
export function sortedSaved(ids) {
  return normaliseSaved(ids).map(id => showIndex.get(id)).sort((a, b) => Number(a.show.day) - Number(b.show.day) || a.show.time.localeCompare(b.show.time));
}
