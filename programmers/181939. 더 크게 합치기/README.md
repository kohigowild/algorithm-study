<p>연산 &oplus;는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.</p>

<ul>
<li>12 &oplus; 3 = 123</li>
<li>3 &oplus; 12 = 312</li>
</ul>

<p>양의 정수 <code>a</code>와 <code>b</code>가 주어졌을 때, <code>a</code> &oplus; <code>b</code>와 <code>b</code> &oplus; <code>a</code> 중 더 큰 값을 return 하는 solution 함수를 완성해 주세요.</p>

<p>단, <code>a</code> &oplus; <code>b</code>와 <code>b</code> &oplus; <code>a</code>가 같다면 <code>a</code> &oplus; <code>b</code>를 return 합니다.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 &le; <code>a</code>, <code>b</code> < 10,000</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>a</th>
<th>b</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>9</td>
<td>91</td>
<td>991</td>
</tr>
<tr>
<td>89</td>
<td>8</td>
<td>898</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li><code>a</code> &oplus; <code>b</code> = 991 이고, <code>b</code> &oplus; <code>a</code> = 919 입니다. 둘 중 더 큰 값은 991 이므로 991을 return 합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li><code>a</code> &oplus; <code>b</code> = 898 이고, <code>b</code> &oplus; <code>a</code> = 889 입니다. 둘 중 더 큰 값은 898 이므로 898을 return 합니다.</li>
</ul>
