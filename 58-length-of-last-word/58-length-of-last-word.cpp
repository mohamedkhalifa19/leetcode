class Solution {
public:
    int lengthOfLastWord(string s) {
        int len=0;
        stringstream ss(s);
        string w;
        while(ss>>w)
            len=w.size();
        return len;
    }
};