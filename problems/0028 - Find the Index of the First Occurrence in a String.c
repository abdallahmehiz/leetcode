int strStr(char *haystack, char *needle)
{
  int hlen = strlen(haystack);
  int nlen = strlen(needle);
  if (nlen == 0)
    return 0;
  if (hlen < nlen)
    return -1;
  for (int i = 0; i < hlen - nlen + 1; i++)
  {
    int j = 0;
    for (; j < nlen; j++)
    {
      if (haystack[i + j] != needle[j])
        break;
    }
    if (j == nlen)
      return i;
  }
  return -1;
}