public class Solution {
    public string LongestCommonPrefix(string[] strs) {
                    if (strs[0] == "") return ""; //return "" if string length is 0

            // basically i am using the entire first string as a prefix
            // then cut it down for each different letter for the other
            // strings until there are no differences.
            string prefix = strs[0];
            for(int i = 1; i < strs.Length; i++)
            {
                while (strs[i].IndexOf(prefix) != 0) 
                {
                    prefix = prefix.Substring(0,prefix.Length - 1);
                }
            }
            return prefix;
    }
}