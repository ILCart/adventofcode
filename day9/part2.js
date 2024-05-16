const input = 
`0 14 45 109 238 493 989 1942 3763 7260 14077 27610 54805 109473 218063 429227 829002 1564034 2875989 5151147 8990168
15 18 30 59 111 187 296 499 999 2292 5394 12159 25703 50949 95308 169511 288607 473142 750534 1156659 1737663
5 11 15 33 90 214 428 752 1253 2229 4693 11450 29258 72870 172222 384737 815757 1651623 3212059 6031479 10982866
11 16 23 24 13 -7 -3 134 674 2194 5828 13721 29926 62289 126510 254929 515555 1053450 2181099 4575420 9702689
16 31 60 112 215 439 934 1988 4110 8143 15412 27912 48541 81383 132046 208060 319340 478719 702556 1011424 1430883
12 7 12 54 178 448 938 1712 2791 4113 5527 6958 9104 15500 37718 107235 300798 792410 1957506 4580209 10266638
17 21 30 48 77 119 191 374 932 2554 6791 16781 38378 81826 164146 312433 568291 993667 1678380 2749678 4384195
24 37 63 112 194 319 497 738 1052 1449 1939 2532 3238 4067 5029 6134 7392 8813 10407 12184 14154
11 8 18 52 130 304 693 1530 3221 6416 12092 21648 37012 60760 96247 147750 220623 321464 458294 640748 880278
22 33 42 54 85 172 386 856 1822 3745 7512 14784 28545 53920 99340 178142 310702 527209 871198 1403970 2210037
18 20 24 34 54 88 140 214 314 444 608 810 1054 1344 1684 2078 2530 3044 3624 4274 4998
-8 -10 1 46 151 357 744 1469 2818 5272 9587 16888 28777 47455 75858 117807 178172 263050 379957 538034 748267
1 6 26 72 171 381 806 1611 3037 5416 9186 14906 23271 35127 51486 73541 102681 140506 188842 249756 325571
5 20 41 68 101 140 185 236 293 356 425 500 581 668 761 860 965 1076 1193 1316 1445
20 38 72 140 277 545 1041 1903 3314 5504 8750 13374 19739 28243 39311 53385 70912 92330 118052 148448 183825
4 7 21 74 220 564 1301 2769 5512 10346 18439 31487 52233 85884 143500 249291 455277 869701 1711690 3417800 6854447
0 1 9 36 101 231 473 938 1906 4032 8710 18677 38984 78578 153085 290356 542855 1017057 1944000 3845866 7918498
12 15 30 67 130 208 262 208 -104 -915 -2586 -5631 -10754 -18890 -31250 -49370 -75164 -110981 -159666 -224625 -309894
2 18 45 83 132 192 263 345 438 542 657 783 920 1068 1227 1397 1578 1770 1973 2187 2412
10 11 20 47 100 195 375 731 1422 2715 5135 9968 20651 46080 107649 252985 580950 1284615 2721626 5524697 10768850
-4 -4 9 49 141 337 751 1623 3426 7039 14036 27210 51589 96428 178991 331412 612714 1129686 2074056 3792092 6922209
5 12 40 97 192 356 683 1398 2974 6351 13364 27575 55854 111344 219060 426682 825747 1593398 3073408 5928841 11418708
18 36 65 116 222 456 965 2037 4241 8715 17723 35658 70733 137675 261817 485069 874340 1533078 2616693 4352728 7066744
3 14 33 56 81 125 268 732 2005 5030 11514 24508 49620 97614 189795 368602 717489 1397080 2710069 5218030 9953981
26 50 97 182 323 552 935 1601 2780 4850 8393 14260 23645 38168 59967 91799 137150 200354 286721 402674 555895
14 29 73 160 309 548 930 1575 2752 5015 9407 17746 33007 59814 105056 178641 294402 471169 734021 1115732 1658425
2 2 6 31 105 278 643 1364 2702 5023 8781 14539 23309 38000 67770 138871 318530 762996 1807680 4127011 9005033
19 20 30 70 181 451 1057 2322 4787 9298 17108 29994 50389 81529 127615 193990 287331 415856 589546 820382 1122597
17 32 74 157 295 502 792 1179 1677 2300 3062 3977 5059 6322 7780 9447 11337 13464 15842 18485 21407
3 4 4 4 17 74 232 595 1362 2914 5950 11697 22294 41677 77846 148591 295156 612955 1317215 2877781 6287522
19 37 64 98 137 179 222 264 303 337 364 382 389 383 362 324 267 189 88 -38 -191
7 7 26 85 209 438 867 1734 3593 7652 16437 35081 73762 152177 307542 608680 1180815 2249821 4223028 7840205 14459843
-5 -12 -20 -22 7 125 448 1196 2772 5887 11745 22303 40622 71326 121187 199855 320753 502158 768490 1151832 1693705
5 0 -5 -10 -15 -20 -25 -30 -35 -40 -45 -50 -55 -60 -65 -70 -75 -80 -85 -90 -95
-1 6 15 19 10 -3 49 371 1430 4169 10381 23363 49033 97772 187349 347401 626073 1099576 1885595 3161675 5189932
13 26 42 57 64 60 53 70 173 497 1331 3267 7438 15847 31746 59946 106813 179516 283824 419381 570900
18 44 94 176 298 479 782 1395 2798 6078 13503 29553 62744 128783 255871 493340 925282 1691416 3018156 5263702 8981990
13 21 39 94 224 472 881 1507 2474 4102 7152 13269 25811 51524 104128 212091 435133 898089 1858087 3834270 7853652
10 32 59 91 127 171 250 451 1002 2450 6028 14373 32912 72576 155200 324266 665886 1348552 2695773 5313987 10309945
-2 -3 3 29 105 287 676 1453 2930 5610 10241 17840 29653 47006 70990 101910 138414 176203 206207 212095 166969
4 8 24 56 111 199 340 598 1178 2648 6392 15474 36213 80955 172804 353468 695920 1324304 2444472 4389764 7688187
-1 2 18 74 224 576 1339 2894 5893 11396 21068 37479 64607 108829 181221 303325 521487 940762 1800302 3631184 7569222
11 21 41 68 95 115 131 179 376 1010 2694 6611 14882 31094 61030 113648 202361 346675 574247 923430 1446377
0 -5 1 40 155 426 998 2125 4240 8071 14842 26641 47129 82940 146427 260898 470224 855763 1565015 2858398 5183119
18 20 20 18 14 8 0 -10 -22 -36 -52 -70 -90 -112 -136 -162 -190 -220 -252 -286 -322
16 37 63 102 179 355 759 1633 3390 6685 12499 22236 37833 61883 97771 149823 223468 325413 463831 648562 891327
15 19 29 66 169 406 900 1878 3759 7322 14062 26987 52376 103452 207559 419283 843056 1670365 3239758 6135514 11361164
4 9 29 79 179 352 622 1017 1588 2461 3945 6725 12175 22832 43078 80083 145068 254953 434461 718755 1156691
3 10 14 26 78 235 623 1487 3295 6912 13896 27036 51386 96281 179189 332801 617539 1142726 2101074 3822974 6859390
22 50 96 165 259 378 539 822 1446 2885 6082 12949 27610 59338 129001 282330 615951 1326821 2804217 5798898 11732018
4 12 36 85 179 375 813 1797 3930 8328 16953 33136 62415 113897 202474 352388 602856 1016740 1693586 2788767 4540955
5 9 14 20 37 99 281 722 1668 3566 7263 14399 28147 54587 105307 202555 390030 756604 1490039 2999763 6195548
16 38 84 163 284 456 688 989 1368 1834 2396 3063 3844 4748 5784 6961 8288 9774 11428 13259 15276
2 4 9 21 50 113 237 464 858 1514 2569 4215 6714 10415 15773 23370 33938 48384 67817 93577 127266
6 11 24 56 127 269 546 1106 2280 4743 9752 19476 37433 69049 122354 208830 344426 550755 856488 1298960 1926003
23 48 97 192 367 665 1144 1921 3296 6018 11796 24254 50761 106109 220203 454376 935673 1927092 3966811 8134512 16543215
3 3 2 2 10 51 204 683 2012 5398 13507 32018 72611 158539 334894 687689 1380199 2724154 5322133 10354528 20154880
19 22 29 53 130 339 824 1822 3703 7028 12638 21811 36577 60387 99564 166539 287349 519488 994437 2016603 4284750
6 22 50 105 212 416 803 1539 2939 5583 10501 19454 35343 62783 108884 184286 304500 491612 776412 1201015 1822046
-4 10 45 122 282 596 1173 2161 3736 6074 9301 13416 18182 22980 26621 27111 21364 4858 -28771 -88202 -184974
24 45 84 149 257 449 814 1529 2922 5565 10404 18933 33419 57185 94958 153289 241052 370029 555588 817461 1180629
8 25 68 164 354 705 1335 2454 4442 8017 14593 26988 50703 96031 181252 337183 613701 1090570 1900670 3289782 5776671
6 8 24 79 221 533 1151 2292 4296 7686 13250 22149 36055 57323 89201 136082 203802 299988 434460 619691 871329
12 39 95 203 399 739 1323 2356 4271 7943 15026 28447 53092 96719 171132 293648 488886 790903 1245697 1914091 2875005
21 34 47 60 73 86 99 112 125 138 151 164 177 190 203 216 229 242 255 268 281
-2 -9 -12 -7 15 78 246 672 1687 3973 8918 19345 40989 85484 176451 361958 739808 1507779 3060484 6169849 12309863
30 51 83 136 220 342 515 803 1438 3055 7099 16464 36428 75950 149395 278751 496398 848483 1398947 2234240 3468748
12 19 40 103 262 613 1312 2603 4872 8752 15318 26434 45350 77700 133126 227852 388660 658881 1107212 1840409 3021190
17 30 49 86 182 432 1032 2374 5238 11174 23249 47476 95474 189272 369723 710808 1343267 2492574 4538333 8104714 14194474
-6 -2 20 78 202 434 823 1415 2238 3282 4474 5648 6510 6598 5237 1489 -5902 -18570 -38592 -68558 -111646
-1 2 7 14 23 34 47 62 79 98 119 142 167 194 223 254 287 322 359 398 439
2 13 45 115 251 505 972 1824 3380 6256 11693 22272 43437 86660 175927 360989 744448 1536918 3168045 6505602 13277061
2 6 8 8 12 35 111 320 842 2048 4638 9836 19652 37221 67229 116436 194306 313754 492020 751680 1121804
8 19 32 50 97 235 600 1487 3542 8162 18272 39770 84180 173596 350194 695154 1367144 2681061 5267792 10392438 20572991
7 18 43 101 223 458 894 1718 3351 6715 13723 28140 57076 113623 221703 425347 806851 1522272 2869567 5415767 10226825
9 4 -1 -6 -11 -16 -21 -26 -31 -36 -41 -46 -51 -56 -61 -66 -71 -76 -81 -86 -91
21 35 67 134 263 502 940 1751 3298 6359 12578 25337 51479 104872 214045 438707 905097 1880089 3923095 8191130 17040717
23 42 67 100 157 278 538 1066 2083 3974 7413 13564 24385 43066 74636 126778 210895 343474 547799 856068 1311973
17 16 18 31 63 120 202 307 471 908 2382 7072 20449 55217 139462 333322 762667 1686190 3627381 7632222 15772239
9 2 1 27 108 270 523 838 1113 1134 566 -903 -2924 -2545 10761 66488 237145 685806 1755099 4125935 9088652
7 20 45 85 149 263 494 1002 2141 4636 9866 20286 40042 75917 138994 248064 437359 774748 1404271 2642831 5192055
25 44 73 122 216 406 783 1492 2738 4771 7832 12037 17171 22359 25576 22953 7831 -30490 -108365 -249844 -489206
5 26 57 88 111 127 148 195 312 648 1704 4900 13688 35521 85085 189311 394807 778486 1462315 2633272 4569773
9 15 28 69 177 418 894 1752 3193 5481 8952 14023 21201 31092 44410 61986 84777 113875 150516 196089 252145
-8 -1 16 41 72 107 144 181 216 247 272 289 296 291 272 237 184 111 16 -103 -248
19 32 57 104 199 399 807 1587 2979 5314 9029 14682 22967 34729 50979 72909 101907 139572 187729 248444 324039
5 3 0 -6 -19 -45 -92 -170 -291 -469 -720 -1062 -1515 -2101 -2844 -3770 -4907 -6285 -7936 -9894 -12195
19 33 60 109 201 388 781 1587 3155 6031 11022 19269 32329 52266 81751 124171 183747 265661 376192 522861 714585
13 25 43 70 112 192 375 813 1839 4173 9350 20546 44083 92094 187268 371602 723333 1390953 2662565 5106282 9848238
16 33 58 92 149 259 468 837 1443 2386 3807 5923 9086 13874 21223 32610 50298 77655 119560 182910 277243
10 17 28 57 142 355 820 1744 3460 6479 11556 19799 32896 53609 86792 141338 233654 393509 673404 1162981 2010426
12 22 35 59 102 172 277 425 624 882 1207 1607 2090 2664 3337 4117 5012 6030 7179 8467 9902
27 42 65 118 251 553 1157 2232 3950 6420 9614 13412 18140 26516 49054 117300 313917 837634 2137911 5184538 11990201
20 47 90 157 266 463 848 1608 3060 5711 10346 18159 30946 51383 83416 132794 207780 320079 486026 728081 1076682
11 15 30 71 165 376 860 1965 4387 9393 19139 37159 69195 124698 219589 381285 657667 1132755 1953604 3375703 5838449
13 26 38 53 77 124 245 601 1615 4259 10577 24656 54514 115911 240113 489452 987549 1975872 3915636 7664879 14776079
1 3 14 35 65 102 160 328 911 2706 7476 18700 42738 90769 182480 353978 675636 1292119 2509355 4976253 10049958
0 9 29 81 213 525 1219 2699 5767 11991 24355 48332 93556 176366 323829 580822 1024172 1793204 3156883 5658162 10412313
17 26 39 61 98 160 273 513 1090 2535 6078 14350 32597 70659 146042 288496 546607 997016 1756993 3001219 4983764
14 35 72 134 232 388 659 1199 2400 5185 11579 25762 55912 117274 237038 461767 868274 1578991 2782986 4763846 7935632
2 13 32 59 94 137 188 247 314 389 472 563 662 769 884 1007 1138 1277 1424 1579 1742
-6 -6 10 58 151 307 565 1015 1873 3679 7786 17486 40472 94032 215754 485288 1068255 2304408 4883699 10195280 21012360
12 28 52 87 156 320 706 1547 3236 6407 12098 22153 40229 74179 141357 279863 571507 1187397 2476601 5136472 10538777
14 42 84 152 277 510 924 1627 2801 4788 8251 14446 25650 45800 81409 142837 246008 414678 683374 1101140 1736243
-4 5 36 105 231 439 774 1347 2449 4785 9903 20943 43961 90419 182245 362688 719982 1438213 2903350 5916121 12103119
10 8 16 49 129 289 589 1154 2237 4301 8105 14772 25814 43092 68700 104783 153332 216046 294414 390251 507023
14 23 44 82 140 220 321 441 603 954 2041 5454 15141 39833 97146 220017 466132 930849 1763722 3187986 5521138
19 28 30 29 44 129 416 1188 2988 6772 14115 27466 50399 87695 144891 226637 332833 451148 544300 530651 257630
23 31 39 59 116 260 580 1211 2331 4158 6981 11320 18468 32034 61876 133343 307710 725396 1694506 3868100 8592743
12 29 63 114 184 290 496 974 2104 4623 9833 19878 38100 69484 121202 203266 329300 517441 791379 1181546 1726464
11 2 -15 -48 -114 -237 -433 -676 -830 -500 1321 7081 22505 60383 147877 339805 741589 1547198 3099561 5983662 11165960
3 14 50 140 322 644 1177 2050 3526 6152 11035 20320 37975 71022 131392 238626 423693 734250 1241728 2050692 3310992
10 28 68 140 254 420 648 948 1330 1804 2380 3068 3878 4820 5904 7140 8538 10108 11860 13804 15950
10 26 52 86 134 223 414 815 1594 2992 5336 9052 14678 22877 34450 50349 71690 99766 136060 182258 240262
10 7 1 7 68 277 807 1949 4158 8107 14749 25387 41752 66089 101251 150801 219122 311535 434425 595375 803308
18 23 37 88 233 584 1346 2867 5700 10677 18995 32314 52867 83582 128216 191501 279302 398787 558609 769100 1042477
14 21 23 16 -4 -41 -99 -182 -294 -439 -621 -844 -1112 -1429 -1799 -2226 -2714 -3267 -3889 -4584 -5356
21 35 62 129 292 664 1472 3154 6498 12822 24222 44027 77895 136629 243054 447596 861211 1721101 3515958 7216069 14683862
12 25 64 148 299 545 930 1531 2482 4005 6448 10330 16393 25661 39506 59721 88600 129025 184560 259552 359239
17 18 17 12 -7 -49 -100 -92 129 824 2355 5132 9489 15461 22430 28604 30289 20910 -10267 -79764 -211927
26 52 88 130 174 216 252 278 290 284 256 202 118 0 -156 -354 -598 -892 -1240 -1646 -2114
8 29 63 121 224 405 715 1230 2059 3365 5448 9045 16277 33321 77294 192711 488472 1216862 2935481 6828532 15328488
16 33 64 108 175 302 577 1176 2433 4988 10100 20297 40729 82034 166486 341120 705138 1465263 3043356 6277654 12785247
-5 -2 15 68 207 530 1222 2622 5331 10380 19490 35487 62993 109594 187767 317929 533187 887242 1469801 2441742 4120851
7 22 62 138 263 465 823 1536 3040 6205 12683 25553 50537 98261 188327 356366 665777 1226540 2224336 3964224 6934319
7 22 49 91 163 308 637 1404 3133 6826 14302 28760 55760 105060 194310 356819 658076 1230467 2344492 4550830 8956014
13 21 50 108 198 331 552 989 1955 4162 9159 20221 44162 95029 201507 421327 868273 1760839 3506560 6842958 13065390
17 29 48 76 110 148 197 279 441 809 1804 4794 13746 38952 104757 264585 628665 1412989 3022544 6188184 12185166
16 31 46 61 76 91 106 121 136 151 166 181 196 211 226 241 256 271 286 301 316
8 17 32 50 61 56 43 78 343 1345 4388 12633 33413 83215 198256 456526 1022658 2236817 4785840 10023572 20554597
25 52 94 152 221 284 312 290 310 801 3018 10023 28625 73214 173338 388683 838833 1763061 3642311 7451654 15187265
5 23 54 109 219 451 935 1917 3872 7746 15450 30811 61331 121414 238406 464247 898411 1733121 3341050 6440929 12400487
26 38 48 53 50 36 8 -37 -102 -190 -304 -447 -622 -832 -1080 -1369 -1702 -2082 -2512 -2995 -3534
15 41 83 155 280 499 898 1662 3165 6105 11693 21905 39806 69955 118900 195772 312987 487065 739575 1098215 1598036
-1 11 39 89 160 250 374 606 1166 2594 6114 14442 33624 77167 175032 392461 867845 1886013 4015037 8353159 16960836
25 49 77 110 150 202 284 458 919 2229 5871 15448 39119 94370 217225 480047 1026198 2137894 4368794 8800331 17528385
18 37 73 142 273 512 935 1680 3014 5460 10017 18503 34013 61360 107065 177843 275426 383827 442785 298508 -378975
4 17 40 81 172 388 886 1988 4354 9335 19674 40850 83554 168068 331712 641057 1211304 2236133 4032468 7106023 12245232
1 20 61 138 270 481 800 1261 1903 2770 3911 5380 7236 9543 12370 15791 19885 24736 30433 37070 44746
12 24 53 102 172 262 369 488 612 732 837 914 948 922 817 612 284 -192 -843 -1698 -2788
5 13 21 29 37 45 53 61 69 77 85 93 101 109 117 125 133 141 149 157 165
-8 -14 -20 -9 46 183 457 947 1765 3091 5314 9468 18347 39030 88184 202717 460644 1021318 2201962 4621039 9461834
8 19 39 73 124 203 351 672 1374 2813 5533 10293 18070 30025 47417 71448 103020 142383 188651 239161 288648
17 32 47 62 77 92 107 122 137 152 167 182 197 212 227 242 257 272 287 302 317
11 30 64 124 238 470 946 1891 3690 7005 13021 23982 44374 83549 161516 321489 656273 1361728 2840866 5898656 12093074
11 22 25 14 -17 -73 -161 -295 -496 -775 -1075 -1104 146 5752 24433 79285 227593 602848 1498793 3529242 7918937
8 21 49 92 150 223 311 414 532 665 813 976 1154 1347 1555 1778 2016 2269 2537 2820 3118
16 30 62 122 235 454 872 1633 2942 5074 8382 13304 20369 30202 43528 61175 84076 113270 149902 195222 250583
-3 8 41 122 302 669 1360 2573 4579 7734 12491 19412 29180 42611 60666 84463 115289 154612 204093 265598 341210
12 25 46 89 172 330 643 1287 2634 5450 11268 23051 46318 90999 174433 326151 595424 1063039 1859434 3192221 5387304
20 45 85 144 236 391 669 1193 2212 4205 8037 15178 27996 50135 86989 146283 238772 379069 586613 886788 1312204
7 18 39 61 76 78 73 119 439 1686 5489 15473 39024 90162 193991 393315 758143 1398954 2484755 4267141 7111756
1 -2 2 24 89 244 575 1245 2565 5110 9892 18602 33933 59996 102841 171095 276729 435966 670342 1007932 1484753
13 27 50 87 148 248 407 650 1007 1513 2208 3137 4350 5902 7853 10268 13217 16775 21022 26043 31928
10 4 -6 -26 -69 -153 -288 -434 -401 349 3049 10185 26338 59394 122217 234891 427648 744610 1248484 2026360 3196773
12 34 81 161 280 442 649 901 1196 1530 1897 2289 2696 3106 3505 3877 4204 4466 4641 4705 4632
14 11 6 5 19 64 161 336 620 1049 1664 2511 3641 5110 6979 9314 12186 15671 19850 24809 30639
11 24 64 154 326 623 1113 1921 3286 5662 9923 17825 33046 63386 125071 250561 501785 991264 1914054 3593728 6545562
3 0 10 54 162 384 804 1566 2949 5578 10934 22431 47467 101039 211757 431428 849851 1617128 2976734 5313904 9225716
2 6 29 95 255 601 1280 2508 4584 7904 12975 20429 31037 45723 65578 91874 126078 169866 225137 294027 378923
19 44 76 114 164 240 369 617 1173 2553 6021 14383 33430 74591 160067 333412 682278 1387741 2829485 5803531 11958283
10 19 28 37 46 55 64 73 82 91 100 109 118 127 136 145 154 163 172 181 190
15 27 43 54 53 47 74 235 763 2175 5601 13484 31055 69409 151802 326187 689327 1431483 2916207 5817834 11350665
5 -2 -15 -36 -66 -95 -72 153 922 2903 7270 15933 31821 59220 104167 174900 282363 440764 668183 987226 1425720
8 18 31 38 39 72 263 901 2544 6168 13381 26738 50211 89890 155017 259485 423968 678886 1068451 1656086 2531559
-6 -9 -12 -15 -18 -21 -24 -27 -30 -33 -36 -39 -42 -45 -48 -51 -54 -57 -60 -63 -66
-2 -6 -10 -11 -6 17 97 329 906 2176 4716 9425 17638 31263 52943 86245 135878 207942 310210 452445 646754
27 38 46 63 112 227 453 846 1473 2412 3752 5593 8046 11233 15287 20352 26583 34146 43218 53987 66652
3 10 24 45 73 108 150 199 255 318 388 465 549 640 738 843 955 1074 1200 1333 1473
7 33 81 155 263 425 685 1131 1925 3341 5803 9907 16401 26085 39579 56891 76699 95241 104685 90827 29939
11 19 33 59 108 212 454 1030 2383 5492 12475 27786 60464 128139 263828 526975 1020715 1917985 3499877 6210541 10734012
28 55 98 159 252 413 706 1231 2155 3807 6903 13007 25428 51001 103817 213380 442709 928208 1965983 4195304 8982191
14 33 69 134 259 509 1013 2033 4121 8447 17422 35786 72380 142871 273748 507953 912552 1588885 2685659 4415462 7075177
7 9 14 16 6 -28 -101 -231 -439 -749 -1188 -1786 -2576 -3594 -4879 -6473 -8421 -10771 -13574 -16884 -20758
17 29 48 86 171 362 792 1769 3985 8915 19539 41597 85697 170746 329371 616248 1120569 1984257 3427994 5787664 9564439
8 13 31 84 223 546 1219 2500 4766 8543 14539 23680 37149 56428 83343 120112 169396 234353 318695 426748 563515
5 21 44 77 146 318 724 1594 3328 6656 12981 25052 48179 92279 175131 327319 599455 1072399 1871330 3184671 5289032
12 28 45 59 60 22 -112 -450 -1176 -2580 -5093 -9327 -16120 -26586 -42170 -64708 -96492 -140340 -199671 -278585 -381948
-1 14 42 83 137 204 284 377 483 602 734 879 1037 1208 1392 1589 1799 2022 2258 2507 2769
15 33 61 101 166 294 573 1184 2470 5054 10075 19728 38574 76716 157252 332959 721757 1578367 3432541 7345187 15367442
7 1 0 18 76 215 519 1157 2477 5224 11018 23332 49370 103474 212993 427921 836035 1585699 2918884 5217198 9063704
5 11 17 28 56 118 240 487 1066 2589 6642 16897 41149 94892 207413 431942 862227 1659103 3092311 5605138 9912558
7 28 64 131 268 540 1039 1889 3269 5493 9245 16182 30312 60849 127676 271198 569483 1167754 2329742 4529493 8620100
4 18 46 98 205 439 945 1993 4063 7996 15305 28882 54621 105004 206659 415703 848225 1740490 3568429 7286884 14811544
6 11 18 35 66 117 221 486 1177 2858 6640 14603 30481 60716 115997 213400 379232 652653 1090102 1770483 2800972
18 23 39 79 170 374 821 1762 3652 7281 14002 26181 48138 88080 161860 299832 558598 1040027 1920513 3493947 6232194
24 37 56 92 163 294 517 871 1402 2163 3214 4622 6461 8812 11763 15409 19852 25201 31572 39088 47879
19 29 34 32 21 -1 -36 -86 -153 -239 -346 -476 -631 -813 -1024 -1266 -1541 -1851 -2198 -2584 -3011
12 23 49 104 213 417 785 1433 2550 4431 7517 12442 20087 31641 48669 73187 107744 155511 220377 307052 421177
5 11 11 3 -18 -60 -115 -97 303 1920 6718 18961 47457 109829 240631 506810 1037285 2079649 4108537 8030811 15568212
11 25 50 97 200 429 908 1853 3652 7011 13179 24238 43412 75340 126319 204746 322615 500627 783946 1286729 2309190
11 28 70 154 315 628 1253 2512 5015 9871 19047 35969 66489 120365 213410 370453 629211 1045086 1696764 2692292 4175031
25 44 70 105 151 206 260 291 261 112 -238 -899 -2013 -3758 -6352 -10057 -15183 -22092 -31202 -42991 -58001
10 30 63 126 252 508 1034 2123 4370 8928 17929 35168 67220 125273 228105 406753 711362 1220134 2048615 3353738 5319460
3 -7 -9 18 112 351 900 2092 4553 9381 18389 34422 61758 106603 177690 286992 450559 689489 1031043 1509914 2169660
7 0 0 16 57 132 250 420 651 952 1332 1800 2365 3036 3822 4732 5775 6960 8296 9792 11457
6 27 66 128 214 315 407 458 477 666 1793 6013 18563 51096 127960 297545 652000 1360261 2721540 5249326 9799676
-7 -6 -3 -6 -23 -53 -66 35 477 1712 4551 10344 21213 40345 72352 123705 203249 322806 497873 748422 1099809
-7 3 34 95 198 369 680 1324 2776 6111 13585 29632 62516 127086 249627 477176 896965 1679113 3171706 6110051 12065212
1 0 -5 -10 -8 11 60 155 315 562 921 1420 2090 2965 4082 5481 7205 9300 11815 14802 18316`

let histories = input.split("\n").map(x=>x.split(" "));


function sequence(seq,last=[seq.map(x=>+x)]){
    let diffs = [];
    for (let i = 0; i < seq.length; i++) {
        const diff = seq[i+1] - seq[i];
        if(isNaN(diff)) break;
        diffs.push(+diff)
        //console.log(seq[i],diff);
    }
    last.push(diffs)
    if(diffs.some(x=>x!=0)){
        //console.log("e",diffs)
        return sequence(diffs,last);
    }
    
    return last
}

function extrapolate_backwards(seq){
    
    let previous = 0;
    for (const pattern of seq) {
        let first = pattern[0];
        previous = first - previous;
    }
    return previous
}


let total = histories.reduce((a,b)=>{
    return a += extrapolate_backwards(sequence(b).reverse())
},0)
console.log(total)
