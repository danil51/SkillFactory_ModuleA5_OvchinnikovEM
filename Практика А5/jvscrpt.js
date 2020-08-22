const var1Node = jQuery('.j-var1');
const var2Node = jQuery('.j-var2');
const var3Node = jQuery('.j-var3');
const var4Node = jQuery('.j-var4');
const var5Node = jQuery('.j-var5');
const var6Node = jQuery('.j-var6');
const speachNode = jQuery('.j-speach');

const btnCreate = jQuery('.create');
const btnReplace = jQuery('.replace');
const textNode = jQuery('.text');


const startObj = {
  "text":[
    "Жили-были {var1} да {var2}",
    "Была у них {var3}",
    "Снесла {var3} {var4}, не простое - золотое",
    "- {var1} бил, бил - не разбил",
    "- {var2} била, била - не разбила",
    "{var5} бежала, {var6} задела, {var4} упало и разбилось.",
    "{var1} плачет, {var2} плачет, а {var3} кудахчет:","{speach}"
  ]
};

btnCreate.click(function() {
  textNode.html(startObj.text);
})

btnReplace.click(function() {
  const var1 = var1Node.val();
  const var2 = var2Node.val();
  const var3 = var3Node.val();
  const var4 = var4Node.val();
  const var5 = var5Node.val();
  const var6 = var6Node.val();
  const speach = speachNode.val();
    
  const newObj = {
    "text":[
      `Жили-были ${var1} да ${var2}`,
      `Была у них ${var3}`,
      `Снесла ${var3} ${var4}, не простое - золотое`,
      `- ${var1} бил, бил - не разбил`,
      `- ${var2} била, била - не разбила`,
      `${var5} бежала, ${var6} задела, ${var4} упало и разбилось.`,
      `${var1} плачет, ${var2} плачет, а ${var3} кудахчет:`,
      `${speach}`,
    ]
  };
  
    
  textNode.html(newObj.text);
})
