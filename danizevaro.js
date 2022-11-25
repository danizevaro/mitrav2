$("#daftar_aktivasi").hide();
      $("#btn_load").hide();

      function looping(lopp) {
        $.each(lopp, function(i, data) {
          $('#list-aktivasi').append(`<tr class="table_aktivasi"><th>aktivasi</th><td scope="col">` + data.Url_bukaolshop + `</td><td scope="col">` + data.Kode_aktivasi + `</td></tr>`)
          if (data.diskon_potongan == "Rp0") {
            document.getElementById("harga_l_" + data.harga).style = ";";
          };
        });
      }

      function getAllAktivasi() {
        $(".loader").show();
        var _0x1be3 = ["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6D\x69\x74\x72\x61\x2E\x75\x69\x62\x6F\x2E\x6D\x79\x2E\x69\x64\x2F\x74\x6F\x6B\x6F\x64\x69\x67\x69\x74\x61\x6C\x2F\x61\x70\x69\x2F\x61\x70\x6B\x2F\x66\x69\x74\x75\x72\x2F\x62\x6F\x2F\x70\x65\x6E\x67\x67\x75\x6E\x61\x2F\x67\x65\x74"];
        let url = _0x1be3[0]
        let param = {
          "api": "UIBUKAOLSHOP",
          "nomor": "879865"
        }
        $.post(url, param, function(data, status) {
          console.log(data);
          looping(data.data)
        });
      };

      function getAktivasi() {
        $("#btn_normal").hide();
        $("#btn_load").show();
        var _0x6b71 = ["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6D\x69\x74\x72\x61\x2E\x75\x69\x62\x6F\x2E\x6D\x79\x2E\x69\x64\x2F\x74\x6F\x6B\x6F\x64\x69\x67\x69\x74\x61\x6C\x2F\x61\x70\x69\x2F\x61\x70\x6B\x2F\x66\x69\x74\x75\x72\x2F\x62\x6F\x2F\x70\x65\x6E\x67\x67\x75\x6E\x61\x2F\x69\x6E\x73\x65\x72\x74"];
        let url = _0x6b71[0]
        let param = {
          "api": "UIBUKAOLSHOP",
          "nama": "Dani Zevaro",
          "nomor": "879865",
          "url": $("#url_website").val(),
        }
        $.post(url, param, function(data, status) {
          $("#btn_load").hide();
          $("#inputan_website").hide();
          $(".table_aktivasi").remove();
          $("#daftar_aktivasi").show();
          getAllAktivasi();
        });
      };
