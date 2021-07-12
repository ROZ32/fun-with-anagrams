/*
 * Complete the 'funWithAnagrams' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY text as parameter.
 */

function funWithAnagrams(text) {
  let result = [];

  function checkForAnagram(word) {
    return result.some(r => {
      if (r.length !== word.length) {
        return false
      }

      return word.split('').sort().toString() === r.split('').sort().toString();
    })
  }

  for (let word of text) {
    if (!result.includes(word) && !checkForAnagram(word)) {
      result.push(word)
    }
  }

  return result
}


console.log(funWithAnagrams(['code', 'aaagmnrs', 'anagrams', 'doce', 'code', 'aaagmnrs', 'code']));
console.log(funWithAnagrams(['poke', 'pkoe', 'okpe', 'ekop']));
console.log(funWithAnagrams(['fqwltvzkqt', 'volphckcyufdqmlglimklfzktgygdttnhcvpfdfbrp', 'lkvshwywshtdgmbqbkkxcvgumo',
  'mwvytbytnuqhmfjaqtgngcwkuzyamnerphfmwevh', 'lezohyeehbrcewjxvceziftiqtntfsrptugtiznorvonzjfea',
  'gamayapwlmbzitzszhzkosvnknber', 'ltlkggdgpljfisyltmmfvhybljvk', 'pcflsaqevcijcyrgmqirzniax',
  'kholawoydvchveigttxwpukzjfh', 'brtspfttotafsngqvoijxuvq', 'ztvaalsehzxbshnrvbykjqlrzzfm',
  'vyoshiktodnsjjpqplciklzqrxloqxrudygjty', 'leizmeainxslwhhjwslqendjvx', 'yghrveuvphknqtsdtwxcktmwwwsdthzmlmbh',
  'kmouhpbqur', 'fxgqlojmwsomowsjvpvhznbsilhhdkbdxqgrgedpzch', 'gefeukmcowoeznwhpiiduxdnnlbnmyjyssbsococdzcu',
  'nkrfduvouaghhcyvmlkza', 'jpfpyljtyjjpyntsefxiswjuten', 'ycpbcnmhfuqmmidmvknyxmywegmtunodvuzygvguxtrdsdf',
  'fssmeluodjgdgzfmrazvndtaur', 'kugs', 'dpawxitivdubbqeonycaegxfjkkl', 'fkraoheucsvpiteqrs',
  'gkaaaohxxzhqjtkqaqhkwbe', 'bpmglbjipnujywogwc', 'lkyrdejaqufowbigrsnjniegvd',
  'otugocedktcbbufnxorixibbdfrzuqsyrfqghoyqevcuanuu', 'szitaoaowsxyglafbwzddoznrvjqeyqignpi',
  'ruijvyllsibobjltusrypanvybsfrxtlfmpdidtyozoolz', 'lgdgowijatklvjzscizrkupmsoxftumyxifyunxucubvk', 'ctkqlr',
  'qgzjvjwzizppvso', 'flvioemycnphf', 'tbnwedtubynsbirepgcxfgsfomhvpmymkdoh', 'ttyyc', 'ibbeaxniwjkfvabnrll',
  'maglythkgla', 'zgkeulyrpaeurdvexqlwgakdtbihmfrjijanxkhrqdllecy', 'pcflsaqevcijcyrgmqixnzira', 'klqrct',
  'ibbeaxniwjkfvanrbll', 'vyoshiktodnsjjpqplciklzqrxloqxrudyyjtg',
  'ycpbcnmhfuqmmidmvknyxmywegmtunodvuzygvgxddftsru', 'yyctt', 'yghrveuvphknqtsdtwxcktmwwwsdtlhbhmmz',
  'vyoshiktodnsjjpqplciklzqrxloqxrugyytjd', 'cttyy', 'brtspfttotafsngqvoiqxuvj', 'lkyrdejaqufowbigrsnjvedgin',
  'volphckcyufdqmlglimklfzktgygdttnhcvpfdrbpf', 'qgzjvjwzizpsovp'
]));
