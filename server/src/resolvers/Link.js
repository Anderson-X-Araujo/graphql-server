function postedBy(parent, args, context) {
  const { id } = parent;

  return context.prisma.user.findUnique({ where: { id } }).postedBy();
}

module.exports = {
  postedBy,
};
