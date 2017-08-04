curl "http://httpbin.org/patch?id=${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=da519ee96eefa58e6e8f46e5ff63de42e551769a4baffd78a992bea3facf1b6165920458cf11faa30ab663d42a60f62aa99a5705a7ecbd0f070934f4a6d8d41d" \
  --data-urlencode "passwords[old]=$OLD" \
  --data-urlencode "passwords[new]=$NEW"
