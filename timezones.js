/* Blueprint — country → IANA timezone mapping.
   Multi-zone countries map to an object of region → zone. */

window.ZONES = {
  'Afghanistan': 'Asia/Kabul', 'Albania': 'Europe/Tirane', 'Algeria': 'Africa/Algiers',
  'Angola': 'Africa/Luanda', 'Argentina': 'America/Argentina/Buenos_Aires', 'Armenia': 'Asia/Yerevan',
  'Australia': { 'Sydney / Melbourne / ACT (Eastern)': 'Australia/Sydney', 'Brisbane (Eastern, no DST)': 'Australia/Brisbane', 'Adelaide (Central)': 'Australia/Adelaide', 'Darwin (Central, no DST)': 'Australia/Darwin', 'Perth (Western)': 'Australia/Perth', 'Hobart (Tasmania)': 'Australia/Hobart' },
  'Austria': 'Europe/Vienna', 'Azerbaijan': 'Asia/Baku', 'Bahamas': 'America/Nassau',
  'Bahrain': 'Asia/Bahrain', 'Bangladesh': 'Asia/Dhaka', 'Barbados': 'America/Barbados',
  'Belarus': 'Europe/Minsk', 'Belgium': 'Europe/Brussels', 'Belize': 'America/Belize',
  'Benin': 'Africa/Porto-Novo', 'Bhutan': 'Asia/Thimphu', 'Bolivia': 'America/La_Paz',
  'Bosnia and Herzegovina': 'Europe/Sarajevo', 'Botswana': 'Africa/Gaborone',
  'Brazil': { 'São Paulo / Rio / Brasília': 'America/Sao_Paulo', 'Manaus (Amazon)': 'America/Manaus', 'Fortaleza / Recife (Northeast)': 'America/Fortaleza', 'Rio Branco (Acre)': 'America/Rio_Branco' },
  'Brunei': 'Asia/Brunei', 'Bulgaria': 'Europe/Sofia', 'Burkina Faso': 'Africa/Ouagadougou',
  'Burundi': 'Africa/Bujumbura', 'Cambodia': 'Asia/Phnom_Penh', 'Cameroon': 'Africa/Douala',
  'Canada': { 'Toronto / Ottawa / Montreal (Eastern)': 'America/Toronto', 'Winnipeg (Central)': 'America/Winnipeg', 'Edmonton / Calgary (Mountain)': 'America/Edmonton', 'Vancouver (Pacific)': 'America/Vancouver', 'Halifax (Atlantic)': 'America/Halifax', 'St. John\'s (Newfoundland)': 'America/St_Johns' },
  'Chad': 'Africa/Ndjamena', 'Chile': 'America/Santiago', 'China': 'Asia/Shanghai',
  'Colombia': 'America/Bogota', 'Costa Rica': 'America/Costa_Rica', 'Croatia': 'Europe/Zagreb',
  'Cuba': 'America/Havana', 'Cyprus': 'Asia/Nicosia', 'Czechia': 'Europe/Prague',
  'DR Congo': { 'Kinshasa (West)': 'Africa/Kinshasa', 'Lubumbashi (East)': 'Africa/Lubumbashi' },
  'Denmark': 'Europe/Copenhagen', 'Dominican Republic': 'America/Santo_Domingo',
  'Ecuador': 'America/Guayaquil', 'Egypt': 'Africa/Cairo', 'El Salvador': 'America/El_Salvador',
  'Estonia': 'Europe/Tallinn', 'Ethiopia': 'Africa/Addis_Ababa', 'Fiji': 'Pacific/Fiji',
  'Finland': 'Europe/Helsinki', 'France': 'Europe/Paris', 'Georgia': 'Asia/Tbilisi',
  'Germany': 'Europe/Berlin', 'Ghana': 'Africa/Accra', 'Greece': 'Europe/Athens',
  'Guatemala': 'America/Guatemala', 'Haiti': 'America/Port-au-Prince', 'Honduras': 'America/Tegucigalpa',
  'Hong Kong': 'Asia/Hong_Kong', 'Hungary': 'Europe/Budapest', 'Iceland': 'Atlantic/Reykjavik',
  'India': 'Asia/Kolkata',
  'Indonesia': { 'Jakarta / Sumatra (Western)': 'Asia/Jakarta', 'Bali / Makassar (Central)': 'Asia/Makassar', 'Papua (Eastern)': 'Asia/Jayapura' },
  'Iran': 'Asia/Tehran', 'Iraq': 'Asia/Baghdad', 'Ireland': 'Europe/Dublin',
  'Israel': 'Asia/Jerusalem', 'Italy': 'Europe/Rome', 'Ivory Coast': 'Africa/Abidjan',
  'Jamaica': 'America/Jamaica', 'Japan': 'Asia/Tokyo', 'Jordan': 'Asia/Amman',
  'Kazakhstan': { 'Almaty (East)': 'Asia/Almaty', 'Aqtobe (West)': 'Asia/Aqtobe' },
  'Kenya': 'Africa/Nairobi', 'Kuwait': 'Asia/Kuwait', 'Kyrgyzstan': 'Asia/Bishkek',
  'Laos': 'Asia/Vientiane', 'Latvia': 'Europe/Riga', 'Lebanon': 'Asia/Beirut',
  'Libya': 'Africa/Tripoli', 'Lithuania': 'Europe/Vilnius', 'Luxembourg': 'Europe/Luxembourg',
  'Macau': 'Asia/Macau', 'Madagascar': 'Indian/Antananarivo', 'Malawi': 'Africa/Blantyre',
  'Malaysia': 'Asia/Kuala_Lumpur', 'Maldives': 'Indian/Maldives', 'Mali': 'Africa/Bamako',
  'Malta': 'Europe/Malta', 'Mauritius': 'Indian/Mauritius',
  'Mexico': { 'Mexico City (Central)': 'America/Mexico_City', 'Cancún (Eastern)': 'America/Cancun', 'Chihuahua (Mountain)': 'America/Chihuahua', 'Tijuana (Pacific)': 'America/Tijuana' },
  'Moldova': 'Europe/Chisinau', 'Monaco': 'Europe/Monaco', 'Mongolia': 'Asia/Ulaanbaatar',
  'Montenegro': 'Europe/Podgorica', 'Morocco': 'Africa/Casablanca', 'Mozambique': 'Africa/Maputo',
  'Myanmar': 'Asia/Yangon', 'Namibia': 'Africa/Windhoek', 'Nepal': 'Asia/Kathmandu',
  'Netherlands': 'Europe/Amsterdam',
  'New Zealand': 'Pacific/Auckland', 'Nicaragua': 'America/Managua', 'Niger': 'Africa/Niamey',
  'Nigeria': 'Africa/Lagos', 'North Korea': 'Asia/Pyongyang', 'North Macedonia': 'Europe/Skopje',
  'Norway': 'Europe/Oslo', 'Oman': 'Asia/Muscat', 'Pakistan': 'Asia/Karachi',
  'Panama': 'America/Panama', 'Papua New Guinea': 'Pacific/Port_Moresby', 'Paraguay': 'America/Asuncion',
  'Peru': 'America/Lima', 'Philippines': 'Asia/Manila', 'Poland': 'Europe/Warsaw',
  'Portugal': 'Europe/Lisbon', 'Puerto Rico': 'America/Puerto_Rico', 'Qatar': 'Asia/Qatar',
  'Romania': 'Europe/Bucharest',
  'Russia': { 'Moscow / St. Petersburg': 'Europe/Moscow', 'Kaliningrad': 'Europe/Kaliningrad', 'Samara': 'Europe/Samara', 'Yekaterinburg': 'Asia/Yekaterinburg', 'Omsk': 'Asia/Omsk', 'Novosibirsk': 'Asia/Novosibirsk', 'Irkutsk': 'Asia/Irkutsk', 'Yakutsk': 'Asia/Yakutsk', 'Vladivostok': 'Asia/Vladivostok', 'Kamchatka': 'Asia/Kamchatka' },
  'Rwanda': 'Africa/Kigali', 'Saudi Arabia': 'Asia/Riyadh', 'Senegal': 'Africa/Dakar',
  'Serbia': 'Europe/Belgrade', 'Singapore': 'Asia/Singapore', 'Slovakia': 'Europe/Bratislava',
  'Slovenia': 'Europe/Ljubljana', 'Somalia': 'Africa/Mogadishu', 'South Africa': 'Africa/Johannesburg',
  'South Korea': 'Asia/Seoul', 'Spain': 'Europe/Madrid', 'Sri Lanka': 'Asia/Colombo',
  'Sudan': 'Africa/Khartoum', 'Sweden': 'Europe/Stockholm', 'Switzerland': 'Europe/Zurich',
  'Syria': 'Asia/Damascus', 'Taiwan': 'Asia/Taipei', 'Tajikistan': 'Asia/Dushanbe',
  'Tanzania': 'Africa/Dar_es_Salaam', 'Thailand': 'Asia/Bangkok', 'Trinidad and Tobago': 'America/Port_of_Spain',
  'Tunisia': 'Africa/Tunis', 'Turkey': 'Europe/Istanbul', 'Turkmenistan': 'Asia/Ashgabat',
  'Uganda': 'Africa/Kampala', 'Ukraine': 'Europe/Kyiv', 'United Arab Emirates': 'Asia/Dubai',
  'United Kingdom': 'Europe/London',
  'United States': { 'New York / Miami (Eastern)': 'America/New_York', 'Chicago / Dallas (Central)': 'America/Chicago', 'Denver / Phoenix area (Mountain)': 'America/Denver', 'Phoenix (Arizona, no DST)': 'America/Phoenix', 'Los Angeles / Seattle (Pacific)': 'America/Los_Angeles', 'Anchorage (Alaska)': 'America/Anchorage', 'Honolulu (Hawaii)': 'Pacific/Honolulu' },
  'Uruguay': 'America/Montevideo', 'Uzbekistan': 'Asia/Tashkent', 'Venezuela': 'America/Caracas',
  'Vietnam': 'Asia/Ho_Chi_Minh', 'Yemen': 'Asia/Aden', 'Zambia': 'Africa/Lusaka', 'Zimbabwe': 'Africa/Harare',
};

/* UTC offset (in hours) of an IANA zone at a given local wall-clock time.
   Uses the browser's built-in tz database, so historical DST rules apply. */
window.tzOffsetHours = function (zone, y, mo, d, h, mi) {
  const fmt = new Intl.DateTimeFormat('en-US', {
    timeZone: zone, hour12: false,
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
  });
  const offsetAt = (utcMs) => {
    const p = {};
    fmt.formatToParts(utcMs).forEach(x => p[x.type] = x.value);
    const asUTC = Date.UTC(+p.year, +p.month - 1, +p.day, p.hour === '24' ? 0 : +p.hour, +p.minute, +p.second);
    return (asUTC - utcMs) / 3600000;
  };
  // Two-pass: guess UTC from wall time, refine with the offset at that guess.
  const wall = Date.UTC(y, mo - 1, d, h, mi);
  let off = offsetAt(wall);
  off = offsetAt(wall - off * 3600000);
  return off;
};
