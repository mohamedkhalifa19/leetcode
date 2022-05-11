class Solution {
public:
    bool isPalindrome(int x) {
        vector<int>k;
        while(x!=0){
            k.push_back(x%10);
            x/=10;
        }
        for(int i=0,j=k.size()-1;i<k.size()&&j>=0;i++,j--){
            if(k[i]!=k[j]) return false;
        }
        return true;
    }
};
