var invertTree = function(root) {
  if (!root) return root

  var temp = root.right
  root.right = root.left
  root.left = temp

  invertTree(root.right)
  invertTree(root.left)

  return root
}
