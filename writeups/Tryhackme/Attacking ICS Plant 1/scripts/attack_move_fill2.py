#!/usr/bin/env python3

import sys
import time
from pymodbus.client.sync import ModbusTcpClient as ModbusClient
from pymodbus.exceptions import ConnectionException

ip = sys.argv[1]
client = ModbusClient(ip, port=502)
client.connect()
while True:
  client.write_register(1, 0)  # Bottle is not filled
  client.write_register(2, 0)  # Bottle is not under the nozzle
  client.write_register(3, 1)  # Start the roller
  client.write_register(4, 1)  # Open the nozzle
  client.write_register(16, 1) # Start the plant
