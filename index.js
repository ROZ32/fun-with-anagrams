/*
 * Complete the 'funWithAnagrams' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY text as parameter.
 */

function funWithAnagrams(text) {
  let remove = [];

  for (let word of text) {
    for (let i = 0; i < text.length; i++) {
      if (word != text[i] && !remove.includes(word)) {
        if (comp(word, text[i])) {
          remove.push(text[i]);
        }
      }
    }
  }

  return text.filter(n => !remove.includes(n)).sort();
}

function comp(word, wordToComp) {
  if (word.length != wordToComp.length) {
    return false;
  }

  const arrWord = word.split("").sort();
  const arrWordToComp = wordToComp.split("").sort();

  return arrWord.toString() === arrWordToComp.toString();
}

console.log(funWithAnagrams(['code', 'aaagmnrs', 'anagrams', 'doce']));
console.log(funWithAnagrams(['poke', 'pkoe', 'okpe', 'ekop']));
console.log(funWithAnagrams(["fqwltvzkqt", "volphckcyufdqmlglimklfzktgygdttnhcvpfdfbrp", "lkvshwywshtdgmbqbkkxcvgumo",
  "mwvytbytnuqhmfjaqtgngcwkuzyamnerphfmwevh", "lezohyeehbrcewjxvceziftiqtntfsrptugtiznorvonzjfea",
  "gamayapwlmbzitzszhzkosvnknber", "ltlkggdgpljfisyltmmfvhybljvk", "pcflsaqevcijcyrgmqirzniax",
  "kholawoydvchveigttxwpukzjfh", "brtspfttotafsngqvoijxuvq", "ztvaalsehzxbshnrvbykjqlrzzfm",
  "vyoshiktodnsjjpqplciklzqrxloqxrudygjty", "leizmeainxslwhhjwslqendjvx", "yghrveuvphknqtsdtwxcktmwwwsdthzmlmbh",
  "kmouhpbqur", "fxgqlojmwsomowsjvpvhznbsilhhdkbdxqgrgedpzch", "gefeukmcowoeznwhpiiduxdnnlbnmyjyssbsococdzcu",
  "nkrfduvouaghhcyvmlkza", "jpfpyljtyjjpyntsefxiswjuten", "ycpbcnmhfuqmmidmvknyxmywegmtunodvuzygvguxtrdsdf",
  "fssmeluodjgdgzfmrazvndtaur", "kugs", "dpawxitivdubbqeonycaegxfjkkl", "fkraoheucsvpiteqrs",
  "gkaaaohxxzhqjtkqaqhkwbe", "bpmglbjipnujywogwc", "lkyrdejaqufowbigrsnjniegvd",
  "otugocedktcbbufnxorixibbdfrzuqsyrfqghoyqevcuanuu", "szitaoaowsxyglafbwzddoznrvjqeyqignpi",
  "ruijvyllsibobjltusrypanvybsfrxtlfmpdidtyozoolz", "lgdgowijatklvjzscizrkupmsoxftumyxifyunxucubvk", "ctkqlr",
  "qgzjvjwzizppvso", "flvioemycnphf", "tbnwedtubynsbirepgcxfgsfomhvpmymkdoh", "ttyyc", "ibbeaxniwjkfvabnrll",
  "maglythkgla", "zgkeulyrpaeurdvexqlwgakdtbihmfrjijanxkhrqdllecy", "pcflsaqevcijcyrgmqixnzira", "klqrct",
  "ibbeaxniwjkfvanrbll", "vyoshiktodnsjjpqplciklzqrxloqxrudyyjtg",
  "ycpbcnmhfuqmmidmvknyxmywegmtunodvuzygvgxddftsru", "yyctt", "yghrveuvphknqtsdtwxcktmwwwsdtlhbhmmz",
  "vyoshiktodnsjjpqplciklzqrxloqxrugyytjd", "cttyy", "brtspfttotafsngqvoiqxuvj", "lkyrdejaqufowbigrsnjvedgin",
  "volphckcyufdqmlglimklfzktgygdttnhcvpfdrbpf", "qgzjvjwzizpsovp"
]));
