#!/usr/bin/env python3

import sys
import time
from pymodbus.client.sync import ModbusTcpClient as ModbusClient
from pymodbus.exceptions import ConnectionException

ip = sys.argv[1]
client = ModbusClient(ip, port=502)
client.connect()
while True:
  client.write_register(3, 0)  # Stop the motor
  client.write_register(4, 0)  # Close the nozzle
  client.write_register(16, 0) # Shutdown the plant
