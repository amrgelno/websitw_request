
function removeCommentsFromScript(code) {
  // Remove HTML comments first
  code = code.replace(/<!--[\s\S]*?-->/g, '');
  // Then remove JS comments
  code = code.replace(/\/\*[\s\S]*?\*\//g, '');
  code = code.replace(/\/\/.*$/gm, '');
  return code.trim();
}


