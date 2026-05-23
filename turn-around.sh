#!/bin/bash

systemctl --user stop ags-widgets
ags bundle app.ts ags-widgets
sudo mv ags-widgets /usr/local/bin
systemctl --user start ags-widgets
